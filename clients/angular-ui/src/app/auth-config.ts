// import { AuthConfig } from 'angular-oauth2-oidc';

// export const authConfig: AuthConfig = {
//   // Url of the Identity Provider
//   issuer: 'https://localhost:5243',

//   // URL of the SPA to redirect the user to after login
//   // redirectUri: window.location.origin
//   //   + ((localStorage.getItem('useHashLocationStrategy') === 'true')
//   //     ? '/#/index.html'
//   //     : '/index.html'),

//   redirectUri: window.location.origin + '/index.html',

//   // URL of the SPA to redirect the user after silent refresh
//   silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

//   // The SPA's id. The SPA is registerd with this id at the auth-server
//   clientId: 'angular-ui',
// postLogoutRedirectUri: window.location.origin + '/index.html',
//   // set the scope for the permissions the client should request
//   // The first three are defined by OIDC. The 4th is a usecase-specific one
//   scope: 'openid profile offline_access email orders basket',

//   // silentRefreshShowIFrame: true,

//   showDebugInformation: true,

//   sessionChecksEnabled: true,

//   checkOrigin: true,

//   timeoutFactor: 0.01,
//   skipSubjectCheck: true,
//   useSilentRefresh:false,
//   useIdTokenHintForSilentRefresh: false,
//   silentRefreshTimeout: 3600000,
//   clearHashAfterLogin: true,
//   nonceStateSeparator: 'semicolon',
//   sessionCheckIntervall: 2000
// };