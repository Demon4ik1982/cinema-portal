import { FC, useEffect, useState } from 'react'
import './UserPage.css'
import { AccountConfig } from '../AccountConfig/AccountConfig'
import { Button } from '../../ui/Button/Button'
import { Favorite } from '../Favorite/Favorite'
import { SegmentedSwitch } from '../../components/SegmentedSwitch/SegmentedSwitch'
import { SegmentedSwitchOption } from '../../components/SegmentedSwitch/SegmentedSwitchOption'
import { logout } from '../../api/User'
import { queryClient } from '../../api/queryClients'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

type UserInfo = 'favorite' | 'config';


export const UserPage: FC = () => {
  const [userInfoType, setUserInfoType] = useState<UserInfo>('favorite');
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess(){
      queryClient.invalidateQueries({ queryKey: ["users", "me"] })
      navigate('/')
    }
  }, queryClient)

    const [isMobile, setIsMobile] = useState(window.innerWidth > 1154)

    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 1154);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return <>

        <section className="user__content container">
          <h2 className="user__title-h2">Мой аккаунт</h2>
          <SegmentedSwitch className='user-menu'>
            <SegmentedSwitchOption
              iconPic='like'
              title={isMobile ? "Избранные фильмы" : "Избранное"}
              className='user-menu__item'
              isActive={userInfoType === 'favorite'}
              onClick={() => setUserInfoType('favorite')}
            />
            <SegmentedSwitchOption
              iconPic='person'
              title={isMobile ? "Настройка аккаунта" : "Настройки"}
              className='user-menu__item'
              isActive={userInfoType === 'config'}
              onClick={() => setUserInfoType('config')}
            />
          </SegmentedSwitch>
          {userInfoType == 'favorite' ? <Favorite /> : <AccountConfig />}


          {userInfoType == 'config' ? <div className='btn-wrapper'><Button onClick={() => loginMutation.mutate()}>Выйти из аккаунта</Button></div> : <></>}



        </section>

  </>

}
