export interface request_token{
    success: boolean;
    expires_at: string;
    request_token: string;
}

export interface session {
    success: boolean;
    session_id: string;
}