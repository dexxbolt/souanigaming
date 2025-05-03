
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface Product {
  id: string;
  name: string;
  price: number;
  features: { [key: string]: string | number };
}

const products = {
  gpu: [
    {
      id: "rtx3060",
      name: "RTX 3060 12GB",
      price: 4799,
      features: {
        memory: "12GB GDDR6",
        bus: "192-bit",
        speed: "15 Gbps",
        cores: "3584 CUDA Cores",
        boost: "1.78 GHz"
      }
    },
    {
      id: "rtx4060",
      name: "RTX 4060 8GB",
      price: 5299,
      features: {
        memory: "8GB GDDR6",
        bus: "128-bit",
        speed: "17 Gbps",
        cores: "3072 CUDA Cores",
        boost: "2.46 GHz"
      }
    },
    {
      id: "rx6700xt",
      name: "RX 6700 XT",
      price: 4999,
      features: {
        memory: "12GB GDDR6",
        bus: "192-bit",
        speed: "16 Gbps",
        cores: "2560 Stream Processors",
        boost: "2.58 GHz"
      }
    }
  ],
  cpu: [
    {
      id: "i9-13900k",
      name: "Intel Core i9-13900K",
      price: 6999,
      features: {
        cores: "24 (8P+16E)",
        threads: "32",
        maxBoost: "5.8 GHz",
        cache: "36MB",
        tdp: "125W"
      }
    },
    {
      id: "r9-7900x",
      name: "AMD Ryzen 9 7900X",
      price: 5999,
      features: {
        cores: "12",
        threads: "24",
        maxBoost: "5.6 GHz",
        cache: "76MB",
        tdp: "170W"
      }
    },
    {
      id: "i7-13700k",
      name: "Intel Core i7-13700K",
      price: 4599,
      features: {
        cores: "16 (8P+8E)",
        threads: "24",
        maxBoost: "5.4 GHz",
        cache: "30MB",
        tdp: "125W"
      }
    }
  ],
};

const ProductComparison: React.FC = () => {
  const [category, setCategory] = useState<"gpu" | "cpu">("gpu");
  const [selectedProducts, setSelectedProducts] = useState<string[]>(["rtx3060", "rtx4060"]);
  
  const filteredProducts = products[category].filter(p => 
    selectedProducts.includes(p.id)
  );
  
  const featureKeys = filteredProducts.length > 0 
    ? Object.keys(filteredProducts[0].features) 
    : [];
  
  const handleProductToggle = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      if (selectedProducts.length > 1) {
        setSelectedProducts(selectedProducts.filter(id => id !== productId));
      }
    } else {
      if (selectedProducts.length < 3) {
        setSelectedProducts([...selectedProducts, productId]);
      }
    }
  };
  
  return (
    <section className="py-16 bg-mustang-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <ArrowLeftRight className="text-mustang-red mr-2" />
          <h2 className="section-title">PRODUCT COMPARISON</h2>
        </div>
        
        <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div>
            <Select value={category} onValueChange={(value: "gpu" | "cpu") => {
              setCategory(value);
              setSelectedProducts([products[value][0].id, products[value][1].id]);
            }}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpu">Graphics Cards</SelectItem>
                <SelectItem value="cpu">Processors</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {products[category].map(product => (
              <Button
                key={product.id}
                variant={selectedProducts.includes(product.id) ? "default" : "outline"}
                size="sm"
                onClick={() => handleProductToggle(product.id)}
                className={!selectedProducts.includes(product.id) ? "text-gray-400" : ""}
              >
                {product.name}
              </Button>
            ))}
          </div>
        </div>
        
        <Card className="bg-mustang-gray border-none">
          <CardHeader>
            <CardTitle className="text-white text-xl">Compare {category === "gpu" ? "Graphics Cards" : "Processors"}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Features</TableHead>
                  {filteredProducts.map(product => (
                    <TableHead key={product.id} className="text-white">{product.name}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-white">Price</TableCell>
                  {filteredProducts.map(product => (
                    <TableCell key={product.id} className="text-mustang-red font-bold">{product.price} MAD</TableCell>
                  ))}
                </TableRow>
                {featureKeys.map(feature => (
                  <TableRow key={feature}>
                    <TableCell className="font-medium text-white">
                      {feature.charAt(0).toUpperCase() + feature.slice(1).replace(/([A-Z])/g, ' $1')}
                    </TableCell>
                    {filteredProducts.map(product => (
                      <TableCell key={product.id} className="text-gray-300">
                        {product.features[feature]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className="font-medium text-white">Action</TableCell>
                  {filteredProducts.map(product => (
                    <TableCell key={product.id}>
                      <WhatsAppButton
                        label="Buy Now"
                        message={`I'm interested in the ${product.name} for ${product.price} MAD.`}
                        productName={product.name}
                        className="w-full"
                      />
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductComparison;
