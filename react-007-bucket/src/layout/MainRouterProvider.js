import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BucketMain from "../comps/BucketMain";
import { bucketLoader, bucketAction } from "../modules/routerAction";

/**
 * RouterProvider 에 연결하여 각종 Routing 을 수행하는 설정만들기
 * creatBrowserRouter() 함수를 사용하여 router 객체 생성
 * 대표적으로 path 를 지정하고 path 따라 열리는 컴포넌트를 설정
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <BucketMain />,
    loader: bucketLoader,
    action: bucketAction,
  },
]);
/**
 * react-router-dom 을 사용한 화면 layoutt 구현하는 도구
 * ...Provider 는 프로젝트 전반에서
 * routing(path 변경, 클릭, 다른 화면 전환등)을 쉽게 구현해 주는 도구
 * Provider 로 감싸는 부분은 router 를 사용한
 *      data handling 이 가능하다
 * router v6.4 이상에서는 Routing 을 구현할때 BrowserRouter 컴포넌트를
 * 사용하지 않고, createBrowserRouter 함수를 사용한다
 * ...Provider 는 createBrowserRouter 함수로 만든 routing 환경을
 *      쉽게 구현하도록 도와주는 도구가 된다
 */
const MainRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default MainRouterProvider;