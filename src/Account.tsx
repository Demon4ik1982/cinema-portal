import './App.css';
import { useQuery } from '@tanstack/react-query';
import { fetchMe } from './api/User';
import { queryClient } from './api/queryClients';
import { Loader } from './components/Loader/Loader';
import App from './App';



function Account() {

  const meQuery = useQuery({
  queryFn: () => fetchMe(),
  retry: 0,
  queryKey: ["users", "me"],
  }, queryClient);

  switch (meQuery.status) {
    case "pending":
      console.log(meQuery.status);
      return <Loader />

    case "error":
      console.log(meQuery.status);
      return <>
              <App />
            </>

    case "success":
          console.log(meQuery.status);
          return <>
                  <App login={meQuery.data} />
                </>
  }
}

export default Account;
