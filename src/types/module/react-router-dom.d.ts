import 'react-router-dom';
import * as router from 'react-router-dom';

declare module 'react-router-dom' {
  export declare function useLocation<State>() {
    type Location = router.Location & { state: State };
    return router.useLocation as Location;
  };
}
