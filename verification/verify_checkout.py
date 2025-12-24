from playwright.sync_api import sync_playwright, expect

def verify_checkout_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        # Navigate to the checkout page
        print("Navigating to checkout page...")
        page.goto("http://localhost:3000/checkout")
        
        # Wait for content to load
        page.wait_for_selector('h1:has-text("Secure Checkout")')
        
        # 1. Verify Initial State (Price 999)
        print("Verifying initial state...")
        price_element = page.locator("span.text-4xl")
        expect(price_element).to_contain_text("₹999")
        
        # Take screenshot of initial state
        page.screenshot(path="verification/checkout_initial.png")
        print("Initial screenshot taken.")
        
        # 2. Verify Referral Logic (Price 669)
        print("Testing referral logic...")
        referral_input = page.locator('input#referral')
        referral_input.fill("TESTCODE")
        
        # Wait for price update
        # We expect the price to change to 669 and the strikethrough 999 to appear
        expect(price_element).to_contain_text("₹669")
        expect(page.locator("text=33% Discount Applied!")).to_be_visible()
        
        # Take screenshot of discounted state
        page.screenshot(path="verification/checkout_discounted.png")
        print("Discounted screenshot taken.")
        
        browser.close()

if __name__ == "__main__":
    verify_checkout_page()
