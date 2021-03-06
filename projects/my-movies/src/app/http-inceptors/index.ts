import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { DefaultInterceptor } from "./default-interceptor";

export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
]