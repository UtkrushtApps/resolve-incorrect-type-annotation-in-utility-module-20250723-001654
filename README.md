# Task Overview

You are working on a TypeScript e-commerce product catalog system. Some products can be added without a price, leading to build errors and runtime crashes when attempting to display product prices. The UI must show a placeholder when the price is not present and the utility for calculating/displaying prices must be type-safe under strict TypeScript settings.

## Guidance
- Ensure type definitions account for products without a price.
- Utility functions must handle missing price values without errors.
- The system should gracefully handle and display products regardless of price presence.

## Objectives
- Update type annotations and utility logic so that all products, including those without a price, are handled safely.
- Ensure compilation passes with strict typing enabled and no runtime crashes occur when listing products.
- Display a clear placeholder (e.g., 'N/A') when a product has no price.

## How to Verify
- Compile the TypeScript code and confirm there are no compiler errors in strict mode.
- Run the application and check the console output: products without a price should be listed with 'N/A' instead of causing failures.
