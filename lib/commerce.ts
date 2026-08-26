export type MerchandiseProduct = {
  id: string;
  name: string;
  description: string;
  sku: string;
  category: string;
  price: number;
  salePrice: number | null;
  images: string[];
  active: boolean;
  publicDisplay: boolean;
  featured: boolean;
  inventoryQuantity: number;
  displayOrder: number;
};

export type MerchandiseOrderItem = {
  productId: string;
  name: string;
  quantity: number;
  price: number;
};

export type MerchandiseOrder = {
  id: string;
  customer: string;
  email: string;
  items: MerchandiseOrderItem[];
  total: number;
  paymentStatus: string;
  fulfillmentStatus: string;
  orderStatus: string;
  refundStatus: string;
  createdAt: string;
};

/*
 * SHARED CMTU MERCHANDISE CATALOG
 *
 * This is the shared commerce layer used by:
 *
 *   /merchandise
 *   Management Office → Merchandise Desk
 *
 * The catalog can later be replaced with a
 * persistent backend/database connection without
 * changing the public page or Merchandise Desk UI.
 */

export const merchandiseProducts: MerchandiseProduct[] = [
  {
    id: "coming-soon-1",
    name: "Official CMTU Apparel",
    description:
      "Official Can't Make This Up! apparel featuring the Scotti Brothers brand.",
    sku: "CMTU-001",
    category: "Apparel",
    price: 0,
    salePrice: null,
    images: [],
    active: true,
    publicDisplay: true,
    featured: true,
    inventoryQuantity: 0,
    displayOrder: 1,
  },
  {
    id: "coming-soon-2",
    name: "Scotti Brothers Collection",
    description:
      "Exclusive Scotti Brothers merchandise and collectible designs.",
    sku: "CMTU-002",
    category: "Collection",
    price: 0,
    salePrice: null,
    images: [],
    active: true,
    publicDisplay: true,
    featured: true,
    inventoryQuantity: 0,
    displayOrder: 2,
  },
  {
    id: "coming-soon-3",
    name: "Can't Make This Up! Collectibles",
    description:
      "Special merchandise inspired by the stories and personalities behind the show.",
    sku: "CMTU-003",
    category: "Collectibles",
    price: 0,
    salePrice: null,
    images: [],
    active: true,
    publicDisplay: true,
    featured: true,
    inventoryQuantity: 0,
    displayOrder: 3,
  },
];

export const merchandiseOrders: MerchandiseOrder[] = [];

/**
 * Format a monetary amount consistently throughout
 * the public merchandise page and Merchandise Desk.
 */
export function formatMoney(
  amount: number,
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

/**
 * Return products that are currently allowed
 * to appear on the public Merchandise page.
 */
export function getPublicMerchandiseCatalog(): MerchandiseProduct[] {
  return merchandiseProducts
    .filter(
      (product) =>
        product.active &&
        product.publicDisplay,
    )
    .sort(
      (a, b) =>
        a.displayOrder -
        b.displayOrder,
    );
}

/**
 * Create a new blank merchandise product.
 *
 * The Merchandise Desk uses this when the user
 * selects "Add Product."
 */
export function createEmptyMerchandiseProduct(
  overrides: Partial<MerchandiseProduct> = {},
): MerchandiseProduct {
  return {
    id: `product-${Date.now()}`,
    name: "",
    description: "",
    sku: "",
    category: "Apparel",
    price: 0,
    salePrice: null,
    images: [],
    active: true,
    publicDisplay: true,
    featured: false,
    inventoryQuantity: 0,
    displayOrder:
      merchandiseProducts.length + 1,
    ...overrides,
  };
}
