import { FC } from "react"
import './AccountConfig.css'
import { icon } from '../../ui/icon/icon';
import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../../api/User";
import { queryClient } from "../../api/queryClients";

export const AccountConfig: FC = () => {

  const meQuery = useQuery({
  queryFn: () => fetchMe(),
  retry: 0,
  queryKey: ["users", "me"],
  }, queryClient);

  const user = meQuery.data

  const firstCharName = user?.name[0]
  const firstCharSurname = user?.surname[0]

  return  <>
      <div className="account__wrapper">
        <div className="account-info__wrapper">
          <div className="account-logo">{`${firstCharName}${firstCharSurname}`}</div>
          <div className="account-name__warapper">
            <span className="account-name__descr">Имя Фамилия</span>
            <p className="account-name__info">{`${user?.name} ${user?.surname}`}</p>
          </div>
        </div>
        <div className="account-info__wrapper">
          <div className="account-logo" dangerouslySetInnerHTML={{ __html: `${icon.email}` }}></div>
          <div className="account-name__warapper">
            <span className="account-name__descr">Электронная почта</span>
            <p className="account-name__info">{`${user?.email}`}</p>
          </div>
        </div>
      </div>
    </>
}
