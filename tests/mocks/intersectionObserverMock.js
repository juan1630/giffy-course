import { vi } from 'vitest';
export const intersectionObserverMock = () => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = vi.fn().mockImplementation(intersectionObserverMock);