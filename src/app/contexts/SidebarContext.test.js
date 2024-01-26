import { render, fireEvent, screen } from '@testing-library/react';
import { SidebarContext, SidebarProvider } from './SidebarContext';

test('checks if sidebar is open by default', () => {
  render(
    <SidebarProvider>
      <SidebarContext.Consumer>
        {({ isSidebarOpen }) => (
          <div data-testid="sidebar">{isSidebarOpen ? 'Open' : 'Closed'}</div>
        )}
      </SidebarContext.Consumer>
    </SidebarProvider>
  );

  expect(screen.getByTestId('sidebar').textContent).toBe('Open');
});

test('checks if sidebar toggles on calling toggleSidebar', () => {
  render(
    <SidebarProvider>
      <SidebarContext.Consumer>
        {({ isSidebarOpen, toggleSidebar }) => (
          <div>
            <button onClick={toggleSidebar} data-testid="toggle">
              Toggle
            </button>
            <div data-testid="sidebar">{isSidebarOpen ? 'Open' : 'Closed'}</div>
          </div>
        )}
      </SidebarContext.Consumer>
    </SidebarProvider>
  );

  fireEvent.click(screen.getByTestId('toggle'));
  expect(screen.getByTestId('sidebar').textContent).toBe('Closed');
});

test('checks if mobile is false by default', () => {
  render(
    <SidebarProvider>
      <SidebarContext.Consumer>
        {({ isMobile }) => <div data-testid="mobile">{isMobile ? 'true' : 'false'}</div>}
      </SidebarContext.Consumer>
    </SidebarProvider>
  );

  expect(screen.getByTestId('mobile').textContent).toBe('false');
});

test('checks if mobile is true when window width is less than 768px', () => {
  window.innerWidth = 767;
  window.dispatchEvent(new Event('resize'));

  render(
    <SidebarProvider>
      <SidebarContext.Consumer>
        {({ isMobile }) => <div data-testid="mobile">{isMobile ? 'true' : 'false'}</div>}
      </SidebarContext.Consumer>
    </SidebarProvider>
  );

  expect(screen.getByTestId('mobile').textContent).toBe('true');
});
