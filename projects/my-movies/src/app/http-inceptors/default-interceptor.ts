import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class DefaultInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let upgradeReq = req.clone({
            params: req.params.set("api_key", "f1acaf7b2ebe07667d827a70b1797696").set("language", "en-US"),
        });
        return next.handle(upgradeReq);
    }
}