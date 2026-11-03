import { describe, expect, it } from "vitest";
import { runInNewContext } from "node:vm";
import { UTMIFY_UTMS_SCRIPT } from "../lib/utmify-utms";
import { UTMIFY_PIXEL_SCRIPT } from "../lib/utmify-pixel";

describe("UTMify UTMs", () => {
  it("loads UTMs and pixel once each, preserving the supplied attributes", () => {
    const scripts: Record<string, unknown>[] = [];
    const document = {
      getElementById: (id: string) => scripts.find(script => script['id'] === id),
      createElement: () => {
        const attributes: Record<string, string> = {};
        return { attributes, setAttribute: (name: string, value: string) => { attributes[name] = value; } };
      },
      head: { appendChild: (script: Record<string, unknown>) => scripts.push(script) },
    };
    const window: Record<string, unknown> = {};
    const context = { document, window };
    for (let i = 0; i < 2; i++) {
      runInNewContext(UTMIFY_PIXEL_SCRIPT, context);
      runInNewContext(UTMIFY_UTMS_SCRIPT, context);
    }
    expect(scripts).toHaveLength(2);
    expect(window['pixelId']).toBe("6a7f1e9c8b84f3fcafe0d5dc");
    expect(scripts.find(script => script['id'] === 'utmify-utms-source')).toMatchObject({
      src: "https://cdn.utmify.com.br/scripts/utms/latest.js", async: true, defer: true,
      attributes: { "data-utmify-prevent-xcod-sck": "", "data-utmify-prevent-subids": "" },
    });
  });
});
