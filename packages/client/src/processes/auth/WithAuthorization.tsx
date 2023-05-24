import {FC, PropsWithChildren} from "react";

import { Auth } from "./Auth";

export const WithAuthorization: FC<PropsWithChildren> = ({children}) => {
    return (<Auth>{children}</Auth>);
};
