import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Zap, Shield, HeadphonesIcon } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useCart } from '@/contexts/CartContext';

interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  type: 'digital' | 'service';
}

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'maintenance' | 'announcement' | 'alert';
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch featured products
        const { data: products } = await supabase
          .from('products')
          .select('*')
          .eq('is_active', true)
          .limit(6);

        // Fetch active notifications
        const { data: notifs } = await supabase
          .from('notifications')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false })
          .limit(3);

        setFeaturedProducts(products || []);
        setNotifications(notifs || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'maintenance': return 'bg-orange-500';
      case 'alert': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Notifications Banner */}
      {notifications.length > 0 && (
        <div className="bg-muted/50 border-b">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center space-x-4 overflow-x-auto">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-center space-x-2 whitespace-nowrap">
                  <div className={`w-2 h-2 rounded-full ${getNotificationColor(notification.type)}`} />
                  <span className="text-sm font-medium">{notification.title}:</span>
                  <span className="text-sm text-muted-foreground">{notification.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Bem-vindo à <span className="text-primary">Orbital Shop</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra produtos digitais e serviços de alta qualidade. 
            Entrega automática e suporte especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="w-full sm:w-auto">
                Explorar Produtos
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Ver Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Orbital Shop?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Instantânea</h3>
              <p className="text-muted-foreground">
                Receba seus produtos digitais por email imediatamente após a compra.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pagamento Seguro</h3>
              <p className="text-muted-foreground">
                Transações 100% seguras com os melhores gateways de pagamento.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte 24/7</h3>
              <p className="text-muted-foreground">
                Nossa equipe está sempre pronta para ajudar você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Produtos em Destaque</h2>
            <Link to="/products">
              <Button variant="outline">Ver Todos</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    {product.image_url ? (
                      <img 
                        src={product.image_url} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-4xl">📦</div>
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={product.type === 'digital' ? 'default' : 'secondary'}>
                      {product.type === 'digital' ? 'Digital' : 'Serviço'}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground ml-1">4.8</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <Button
                      size="sm"
                      onClick={() => addToCart(product.id)}
                      className="flex items-center space-x-1"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Comprar</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de clientes satisfeitos e transforme seu negócio hoje mesmo.
          </p>
          <Link to="/products">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-primary hover:text-primary"
            >
              Começar Agora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}