import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const services = [
    {
      id: 1,
      title: 'Консультация',
      description: 'Персональная консультация с экспертом',
      price: '5000 ₽',
      duration: '60 мин',
      image: '/img/e54f522e-4209-4cfa-9a29-38ed945b6cfd.jpg'
    },
    {
      id: 2,
      title: 'Диагностика',
      description: 'Полная диагностика и анализ',
      price: '8000 ₽',
      duration: '90 мин',
      image: '/img/e54f522e-4209-4cfa-9a29-38ed945b6cfd.jpg'
    },
    {
      id: 3,
      title: 'Лечение',
      description: 'Комплексное лечение',
      price: '12000 ₽',
      duration: '120 мин',
      image: '/img/e54f522e-4209-4cfa-9a29-38ed945b6cfd.jpg'
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const bookingData = [
    { date: '2025-01-20', time: '10:00', service: 'Консультация', status: 'Забронировано' },
    { date: '2025-01-20', time: '14:00', service: 'Диагностика', status: 'Доступно' },
    { date: '2025-01-21', time: '09:00', service: 'Лечение', status: 'Доступно' },
    { date: '2025-01-21', time: '15:00', service: 'Консультация', status: 'Забронировано' },
    { date: '2025-01-22', time: '11:00', service: 'Диагностика', status: 'Доступно' },
    { date: '2025-01-22', time: '16:00', service: 'Лечение', status: 'Доступно' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">BookingPro</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#booking" className="text-gray-600 hover:text-primary transition-colors">Бронирование</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Онлайн бронирование
            <span className="text-primary block">быстро и удобно</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Забронируйте нужную услугу всего за несколько кликов. 
            Выберите удобное время и получите мгновенное подтверждение.
          </p>
        </div>

        {/* Quick Booking Form */}
        <Card className="max-w-4xl mx-auto mb-16 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Быстрое бронирование</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <Label htmlFor="service">Услуга</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service.id} value={service.title}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="date">Дата</Label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <Label htmlFor="time">Время</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите время" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map(time => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full hover-scale">
                  <Icon name="Calendar" className="mr-2" size={18} />
                  Забронировать
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600">Профессиональный подход к каждому клиенту</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 rounded-t-lg flex items-center justify-center">
                <Icon name="Stethoscope" size={48} className="text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {service.title}
                  <Badge variant="secondary">{service.duration}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <Button size="sm" className="hover-scale">
                    Выбрать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Booking Table */}
      <section id="booking" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Расписание записей</h2>
          <p className="text-xl text-gray-600">Выберите удобное время для записи</p>
        </div>

        <Card className="max-w-6xl mx-auto">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">Дата</th>
                    <th className="text-left py-3 px-4 font-semibold">Время</th>
                    <th className="text-left py-3 px-4 font-semibold">Услуга</th>
                    <th className="text-left py-3 px-4 font-semibold">Статус</th>
                    <th className="text-left py-3 px-4 font-semibold">Действие</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingData.map((booking, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Icon name="Calendar" className="mr-2 text-gray-400" size={16} />
                          {new Date(booking.date).toLocaleDateString('ru-RU')}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Icon name="Clock" className="mr-2 text-gray-400" size={16} />
                          {booking.time}
                        </div>
                      </td>
                      <td className="py-3 px-4">{booking.service}</td>
                      <td className="py-3 px-4">
                        <Badge variant={booking.status === 'Доступно' ? 'default' : 'destructive'}>
                          {booking.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Button 
                          size="sm" 
                          variant={booking.status === 'Доступно' ? 'default' : 'outline'}
                          disabled={booking.status === 'Забронировано'}
                          className="hover-scale"
                        >
                          {booking.status === 'Доступно' ? 'Забронировать' : 'Занято'}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Остались вопросы? Мы с радостью поможем!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Телефон</h3>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@bookingpro.ru</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Режим работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00-18:00<br />Сб-Вс: 10:00-16:00</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea id="message" placeholder="Ваше сообщение..." rows={4} />
                  </div>
                  <Button className="w-full hover-scale">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Calendar" className="text-primary" size={24} />
                <h3 className="text-xl font-bold">BookingPro</h3>
              </div>
              <p className="text-gray-400">
                Современная платформа для онлайн бронирования услуг
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Консультация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Диагностика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лечение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@bookingpro.ru</li>
                <li>г. Москва, ул. Примерная, д. 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BookingPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;