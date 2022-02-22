import { environment } from "../../../../environments/environment";

export class UserDetails {
  role = environment.userType.USER;
  status = 1;
  firstName?: string = "";
  lastName?: string = "";
  phoneNumber?: any = "";
  email: string = "";
  password: string = "";
  confNewPassword?: any = "";
}
