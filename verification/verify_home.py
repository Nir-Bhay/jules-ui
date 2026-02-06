from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 720})

    # 1. Home Page Verification
    print("Navigating to Home Page...")
    page.goto("http://localhost:8000/index.html")

    expect(page).to_have_title("Physiotherapy Health Clinic - Katara Hills, Bhopal")
    expect(page.get_by_text("Expert Physiotherapy Care for Your Complete Wellness Journey")).to_be_visible()

    # Take screenshot of Hero
    page.screenshot(path="verification/home_hero.png")

    # Scroll to Gallery (id=gallery) and take screenshot
    print("Scrolling to Gallery...")
    gallery = page.locator("#gallery")
    gallery.scroll_into_view_if_needed()
    page.wait_for_timeout(1000) # Wait for fade-up animation
    page.screenshot(path="verification/home_gallery.png")

    # 2. Mobile Menu Verification
    print("Checking Mobile Menu...")
    page.set_viewport_size({"width": 375, "height": 667})
    page.reload()

    # Click hamburger
    menu_btn = page.locator("#mobile-menu-btn")
    menu_btn.click()

    # Check if menu is visible (it should remove translate-x-full class)
    menu = page.locator("#mobile-menu")
    # Using regex to ensure translate-x-full is NOT present in the class list
    import re
    expect(menu).not_to_have_class(re.compile(r"translate-x-full"))

    # Wait for animation
    page.wait_for_timeout(500)
    page.screenshot(path="verification/mobile_menu.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
