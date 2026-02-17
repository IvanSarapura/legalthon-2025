import { describe, it, expect } from "vitest";
import { HIGHLIGHTS_IMAGES, HIGHLIGHTS_IMAGES_BASE, type HighlightImageName } from "./highlightsImages";

describe("highlightsImages", () => {
  describe("HIGHLIGHTS_IMAGES", () => {
    it("debe ser un array no vacío", () => {
      expect(HIGHLIGHTS_IMAGES).toBeInstanceOf(Array);
      expect(HIGHLIGHTS_IMAGES.length).toBeGreaterThan(0);
    });

    it("debe contener solo strings", () => {
      HIGHLIGHTS_IMAGES.forEach((image) => {
        expect(typeof image).toBe("string");
      });
    });

    it("debe tener nombres de archivo con extensión .jpg o .JPG", () => {
      HIGHLIGHTS_IMAGES.forEach((image) => {
        expect(image).toMatch(/\.(jpg|JPG)$/);
      });
    });

    it("no debe tener elementos duplicados", () => {
      const uniqueImages = new Set(HIGHLIGHTS_IMAGES);
      expect(uniqueImages.size).toBe(HIGHLIGHTS_IMAGES.length);
    });

    it("no debe contener strings vacíos", () => {
      HIGHLIGHTS_IMAGES.forEach((image) => {
        expect(image.trim().length).toBeGreaterThan(0);
      });
    });

    it("debe tener nombres de archivo válidos (sin caracteres especiales problemáticos)", () => {
      const invalidChars = /[<>:"|?*]/;
      HIGHLIGHTS_IMAGES.forEach((image) => {
        expect(image).not.toMatch(invalidChars);
      });
    });
  });

  describe("HIGHLIGHTS_IMAGES_BASE", () => {
    it("debe ser un string", () => {
      expect(typeof HIGHLIGHTS_IMAGES_BASE).toBe("string");
    });

    it("debe ser una ruta válida que comience con /", () => {
      expect(HIGHLIGHTS_IMAGES_BASE).toMatch(/^\//);
    });

    it("no debe terminar con /", () => {
      expect(HIGHLIGHTS_IMAGES_BASE).not.toMatch(/\/$/);
    });
  });

  describe("HighlightImageName type", () => {
    it("debe permitir todos los valores del array HIGHLIGHTS_IMAGES", () => {
      HIGHLIGHTS_IMAGES.forEach((image) => {
        const typedImage: HighlightImageName = image;
        expect(typedImage).toBe(image);
      });
    });
  });

  describe("Integridad de datos", () => {
    it("debe tener al menos 10 imágenes para un carrusel efectivo", () => {
      expect(HIGHLIGHTS_IMAGES.length).toBeGreaterThanOrEqual(10);
    });

    it("debe tener un número razonable de imágenes (menos de 100)", () => {
      expect(HIGHLIGHTS_IMAGES.length).toBeLessThan(100);
    });
  });
});
