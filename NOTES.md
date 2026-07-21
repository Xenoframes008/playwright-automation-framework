# Playwright notes

They are tools Playwright gives you when you import from `@playwright/test`:

## `test`

Declares a test. You give it a name and a function with the steps to run.

```ts
test('Footer Links', async ({ page }) => {
  // steps go here
});
```

## `expect`

Makes a check (assertion). If the check fails, the test fails.

```ts
await expect(page).toHaveTitle('Resonance — Music for focused listening');
```

## Short version

`test` = the scenario, `expect` = the proof that it worked.
