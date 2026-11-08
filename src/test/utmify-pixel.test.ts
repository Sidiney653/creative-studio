import { describe, expect, it } from "vitest";
import { runInNewContext } from "node:vm";
import { UTMIFY_PIXEL_SCRIPT } from "../lib/utmify-pixel";

describe("UTMify pixel", () => {
  it("configures the supplied pixel and loads its script once", () => {
    const appended: Record<string, unknown>[] = [];
    const window: Record<string, unknown> = {};
    const document = {
      getElementById: (id: string) => appended.find((script) => script["id"] === id),
      createElement: () => ({}),
      head: { appendChild: (script: Record<string, unknown>) => appended.push(script) },
    };
    const context = { document, window };
    runInNewContext(UTMIFY_PIXEL_SCRIPT, context);
    runInNewContext(UTMIFY_PIXEL_SCRIPT, context);
    expect(window["pixelId"]).toBe("6a7f1e9c8b84f3fcafe0d5dc");
    expect(appended).toHaveLength(1);
    expect(appended[0]).toMatchObject({
      src: "https://cdn.utmify.com.br/scripts/pixel/pixel.js",
      async: true,
      defer: true,
    });
  });
});
