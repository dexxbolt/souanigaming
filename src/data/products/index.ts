
import { Product } from '../types/product';
import { gpuProducts } from './gpuProducts';
import { storageProducts } from './storageProducts';
import { keyboardProducts, mouseProducts, accessoryProducts } from './peripheralProducts';
import { headsetProducts, audioProducts } from './audioProducts';
import { monitorProducts } from './displayProducts';
import { 
  processorProducts, 
  powerSupplyProducts, 
  caseProducts, 
  motherboardProducts,
  coolingProducts
} from './componentsProducts';
import { streamingProducts } from './streamingProducts';
import { laptopProducts, chairProducts } from './miscProducts';

// Combine all product arrays
export const allProducts: Product[] = [
  ...gpuProducts,
  ...storageProducts,
  ...keyboardProducts,
  ...mouseProducts,
  ...accessoryProducts,
  ...headsetProducts,
  ...audioProducts,
  ...monitorProducts,
  ...processorProducts,
  ...powerSupplyProducts,
  ...caseProducts,
  ...motherboardProducts,
  ...coolingProducts,
  ...streamingProducts,
  ...laptopProducts,
  ...chairProducts
];

// Categorized products for easier access
export const productsByCategory = {
  gpus: gpuProducts,
  storage: storageProducts,
  keyboards: keyboardProducts,
  mice: mouseProducts,
  accessories: accessoryProducts,
  headsets: headsetProducts,
  audio: audioProducts,
  monitors: monitorProducts,
  processors: processorProducts,
  power_supplies: powerSupplyProducts,
  cases: caseProducts,
  motherboards: motherboardProducts,
  cooling: coolingProducts,
  streaming: streamingProducts,
  laptops: laptopProducts,
  chairs: chairProducts
};

// Re-export individual categories for direct access
export {
  gpuProducts,
  storageProducts,
  keyboardProducts,
  mouseProducts,
  accessoryProducts,
  headsetProducts,
  audioProducts,
  monitorProducts,
  processorProducts,
  powerSupplyProducts,
  caseProducts,
  motherboardProducts,
  coolingProducts,
  streamingProducts,
  laptopProducts,
  chairProducts
};
