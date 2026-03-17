import { describe, it, expect } from "vitest";
import { duplicateForInfinite, type CarouselImage } from "./HighlightsCarousel";

describe("duplicateForInfinite", () => {
  it("duplica una lista vacía", () => {
    const emptyList: CarouselImage[] = [];
    const result = duplicateForInfinite(emptyList);
    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
  });

  it("duplica una lista con un elemento", () => {
    const singleItem: CarouselImage[] = [{ src: "/image1.jpg", alt: "Image 1" }];
    const result = duplicateForInfinite(singleItem);
    expect(result).toHaveLength(2);
    expect(result[0]).toEqual(singleItem[0]);
    expect(result[1]).toEqual(singleItem[0]);
  });

  it("duplica una lista con múltiples elementos", () => {
    const multipleItems: CarouselImage[] = [
      { src: "/image1.jpg", alt: "Image 1" },
      { src: "/image2.jpg", alt: "Image 2" },
      { src: "/image3.jpg", alt: "Image 3" },
    ];
    const result = duplicateForInfinite(multipleItems);
    
    expect(result).toHaveLength(6);
    expect(result[0]).toEqual(multipleItems[0]);
    expect(result[1]).toEqual(multipleItems[1]);
    expect(result[2]).toEqual(multipleItems[2]);
    expect(result[3]).toEqual(multipleItems[0]);
    expect(result[4]).toEqual(multipleItems[1]);
    expect(result[5]).toEqual(multipleItems[2]);
  });

  it("mantiene el orden de los elementos", () => {
    const orderedItems: CarouselImage[] = [
      { src: "/a.jpg", alt: "A" },
      { src: "/b.jpg", alt: "B" },
      { src: "/c.jpg", alt: "C" },
    ];
    const result = duplicateForInfinite(orderedItems);
    expect(result[0].alt).toBe("A");
    expect(result[1].alt).toBe("B");
    expect(result[2].alt).toBe("C");
    expect(result[3].alt).toBe("A");
    expect(result[4].alt).toBe("B");
    expect(result[5].alt).toBe("C");
  });

  it("no muta la lista original", () => {
    const original: CarouselImage[] = [
      { src: "/image1.jpg", alt: "Image 1" },
      { src: "/image2.jpg", alt: "Image 2" },
    ];
    const originalLength = original.length;
    const result = duplicateForInfinite(original);
    expect(original).toHaveLength(originalLength);
    expect(result).toHaveLength(originalLength * 2);
  });
});
