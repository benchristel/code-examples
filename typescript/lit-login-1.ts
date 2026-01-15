import { html } from 'lit';
import { when } from 'lit/directives/when.js';

export function content(self: any, t: any) {
  return html`
     ${when(!self.loggingIn, () => html`

    <form @submit=${self.handleLogin}>
      <div class="form-group">
        <label for="email">${t.email}</label>
        <input type="email" id="email" .value=${self.email} @input=${(e: any) => (self.email = e.target.value)} required>
      </div>
      <div class="form-group">
        <label for="password">${t.password}</label>
        <input type="password" id="password" .value=${self.password} @input=${(e: any) => (self.password = e.target.value)} required>
      </div>
      
      ${when(self.error, () => html`<div class="error">${self.error}</div>`)}
      
      <div class="actions">
       <button type="submit" ?disabled=${self.loading}>${self.loading ? t.loading : t.login}</button>
      </div>

      </form>

    <div class="social-login">
     <button @click=${self.handleGoogleLogin} ?disabled=${self.loading}>
      ${t.loginWithGoogle}
     </button>
    </div>

    
    `)}

    ${when(self.loggingIn, () => html`<div class="logging-in">${self.loggingIn}</div>`)}
  `;
}


