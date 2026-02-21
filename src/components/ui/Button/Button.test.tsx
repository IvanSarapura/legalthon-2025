import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  describe("Renderizado básico", () => {
    it("renderiza como botón por defecto", () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole("button", { name: /click me/i });
      expect(button).toBeInTheDocument();
      expect(button.tagName).toBe("BUTTON");
    });

    it("renderiza como enlace cuando se especifica as='a' y href", () => {
      render(
        <Button as="a" href="/test">
          Link text
        </Button>
      );
      const link = screen.getByRole("link", { name: /link text/i });
      expect(link).toBeInTheDocument();
      expect(link.tagName).toBe("A");
      expect(link).toHaveAttribute("href", "/test");
    });

    it("aplica la variante primary por defecto", () => {
      render(<Button>Primary</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("primary");
    });

    it("aplica la variante secondary cuando se especifica", () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("secondary");
    });

    it("aplica la variante cta cuando se especifica", () => {
      render(<Button variant="cta">CTA</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("cta");
    });

    it("aplica clases personalizadas", () => {
      render(<Button className="custom-class">Custom</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("custom-class");
    });
  });

  describe("Props de botón HTML", () => {
    it("pasa props adicionales al botón", () => {
      render(<Button data-testid="test-button" disabled>Disabled</Button>);
      const button = screen.getByTestId("test-button");
      expect(button).toBeDisabled();
    });

    it("tiene type='button' por defecto", () => {
      render(<Button>Click</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "button");
    });
  });

  describe("Props de enlace HTML", () => {
    it("pasa target y rel al enlace", () => {
      render(
        <Button as="a" href="/external" target="_blank" rel="noopener noreferrer">
          External link
        </Button>
      );
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("Interactividad", () => {
    it("maneja clicks en el botón", async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      render(<Button onClick={handleClick}>Click me</Button>);
      
      const button = screen.getByRole("button");
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
