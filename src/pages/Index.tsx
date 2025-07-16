import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import '@fontsource/orbitron/400.css';
import '@fontsource/orbitron/700.css';
import '@fontsource/rajdhani/400.css';
import '@fontsource/rajdhani/600.css';

export default function Index() {
  const [currentTime, setCurrentTime] = useState(900); // 15 минут в секундах
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && currentTime > 0) {
      interval = setInterval(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, currentTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const services = [
    {
      title: 'Замена масла',
      price: '1500₽',
      time: '10 мин',
      description: 'Полная замена моторного масла с проверкой всех систем'
    },
    {
      title: 'Замена фильтров',
      price: '800₽',
      time: '5 мин',
      description: 'Воздушный, топливный и масляный фильтры'
    },
    {
      title: 'Комплекс масло + фильтр',
      price: '2000₽',
      time: '15 мин',
      description: 'Полный комплекс обслуживания за 15 минут'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm border-b border-red-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-white text-xl font-bold" style={{ fontFamily: 'Orbitron' }}>
                SPEED SERVICE
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-red-500 transition-colors font-medium">
                Услуги
              </a>
              <a href="#about" className="text-white hover:text-red-500 transition-colors font-medium">
                О нас
              </a>
              <a href="#contacts" className="text-white hover:text-red-500 transition-colors font-medium">
                Контакты
              </a>
            </nav>
            <Button className="bg-red-500 hover:bg-red-600 text-white font-bold px-6">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-red-500 text-white mb-4 px-4 py-2 text-sm font-semibold">
                  🏁 FORMULA 1 СКОРОСТЬ
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Orbitron' }}>
                  15 МИНУТ
                  <span className="text-red-500 block">ИЛИ СКИДКА</span>
                  <span className="text-yellow-400">15%</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'Rajdhani' }}>
                  Экспресс-замена масла и фильтров в Ростове-на-Дону. 
                  Гарантируем выполнение за 15 минут или предоставляем скидку 15%!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-4 text-lg"
                    onClick={() => setIsRunning(true)}
                  >
                    <Icon name="Play" size={20} className="mr-2" />
                    ЗАПУСТИТЬ ТАЙМЕР
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold px-8 py-4 text-lg"
                  >
                    <Icon name="Phone" size={20} className="mr-2" />
                    ПОЗВОНИТЬ
                  </Button>
                </div>
              </div>
              
              {/* Timer Display */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-red-500 to-red-700 p-4 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-full"></div>
                      <div className="text-center z-10">
                        <div className="text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Orbitron' }}>
                          {formatTime(currentTime)}
                        </div>
                        <div className="text-red-500 text-sm font-semibold tracking-wider">
                          ОСТАЛОСЬ ВРЕМЕНИ
                        </div>
                        <div className="mt-4">
                          <div className={`inline-block w-3 h-3 rounded-full ${isRunning ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                          <span className="ml-2 text-xs text-gray-400">
                            {isRunning ? 'РАБОТАЕМ' : 'ОЖИДАНИЕ'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron' }}>
                НАШИ УСЛУГИ
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Быстрое и качественное обслуживание вашего автомобиля
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-black/50 border-red-500/20 hover:border-red-500/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-red-500/20 text-red-500 border-red-500/30">
                        {service.time}
                      </Badge>
                      <div className="text-2xl font-bold text-yellow-400" style={{ fontFamily: 'Orbitron' }}>
                        {service.price}
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-red-500 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold">
                      Выбрать услугу
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Orbitron' }}>
                  О НАС
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Мы - команда профессионалов, работающая по принципам Формулы-1: 
                  скорость, точность и максимальная эффективность.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2" style={{ fontFamily: 'Orbitron' }}>
                      1000+
                    </div>
                    <div className="text-gray-300">Довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2" style={{ fontFamily: 'Orbitron' }}>
                      99%
                    </div>
                    <div className="text-gray-300">Работ за 15 минут</div>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Наша гарантия</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                    Замена масла за 15 минут
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                    Скидка 15% при превышении времени
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                    Использование качественных материалов
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                    Гарантия на все виды работ
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron' }}>
                КОНТАКТЫ
              </h2>
              <p className="text-xl text-gray-300">
                Приезжайте к нам в Ростове-на-Дону
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black/50 border-red-500/20 text-center">
                <CardContent className="pt-6">
                  <Icon name="MapPin" size={40} className="text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Адрес</h3>
                  <p className="text-gray-300">
                    ул. Пушкинская, 123<br />
                    Ростов-на-Дону
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/50 border-red-500/20 text-center">
                <CardContent className="pt-6">
                  <Icon name="Phone" size={40} className="text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Телефон</h3>
                  <p className="text-gray-300">
                    +7 (863) 123-45-67<br />
                    +7 (903) 456-78-90
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-black/50 border-red-500/20 text-center">
                <CardContent className="pt-6">
                  <Icon name="Clock" size={40} className="text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Режим работы</h3>
                  <p className="text-gray-300">
                    Пн-Сб: 8:00 - 20:00<br />
                    Вс: 9:00 - 18:00
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-white text-xl font-bold" style={{ fontFamily: 'Orbitron' }}>
                SPEED SERVICE
              </span>
            </div>
            <p className="text-gray-400">
              © 2024 Speed Service. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}