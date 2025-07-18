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
      title: 'Классический балет',
      description: 'Основы балетного искусства для всех уровней',
      price: '2000 ₽',
      duration: '90 мин',
      image: '/img/2b95e8dc-e802-4658-95a1-8eda07b439ed.jpg'
    },
    {
      id: 2,
      title: 'Современные танцы',
      description: 'Contemporary и модерн танцы',
      price: '1800 ₽',
      duration: '60 мин',
      image: '/img/2b95e8dc-e802-4658-95a1-8eda07b439ed.jpg'
    },
    {
      id: 3,
      title: 'Хип-хоп',
      description: 'Энергичные уличные танцы',
      price: '1500 ₽',
      duration: '60 мин',
      image: '/img/2b95e8dc-e802-4658-95a1-8eda07b439ed.jpg'
    }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const scheduleData = [
    {
      day: 'Понедельник',
      classes: [
        { time: '10:00', name: 'Классический балет', instructor: 'Анна Иванова', level: 'Начальный', spots: 12, booked: 8 },
        { time: '18:00', name: 'Современные танцы', instructor: 'Мария Петрова', level: 'Средний', spots: 15, booked: 15 },
        { time: '20:00', name: 'Хип-хоп', instructor: 'Дмитрий Козлов', level: 'Продвинутый', spots: 20, booked: 12 }
      ]
    },
    {
      day: 'Вторник',
      classes: [
        { time: '09:00', name: 'Классический балет', instructor: 'Анна Иванова', level: 'Продвинутый', spots: 10, booked: 7 },
        { time: '17:00', name: 'Современные танцы', instructor: 'Екатерина Смирнова', level: 'Начальный', spots: 15, booked: 5 },
        { time: '19:00', name: 'Хип-хоп', instructor: 'Дмитрий Козлов', level: 'Средний', spots: 18, booked: 18 }
      ]
    },
    {
      day: 'Среда',
      classes: [
        { time: '11:00', name: 'Классический балет', instructor: 'Анна Иванова', level: 'Средний', spots: 12, booked: 9 },
        { time: '18:30', name: 'Современные танцы', instructor: 'Мария Петрова', level: 'Продвинутый', spots: 12, booked: 10 },
        { time: '20:30', name: 'Хип-хоп', instructor: 'Алексей Николаев', level: 'Начальный', spots: 25, booked: 15 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">DanceStudio</h1>
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
            Студия танцев
            <span className="text-primary block">твой путь к мечте</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Присоединяйтесь к нашим танцевальным классам! 
            Выберите направление и забронируйте место в группе.
          </p>
        </div>

        {/* Quick Booking Form */}
        <Card className="max-w-4xl mx-auto mb-16 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Записаться на занятие</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <Label htmlFor="service">Танцевальное направление</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите направление" />
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
                  <Icon name="Music" className="mr-2" size={18} />
                  Записаться
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Танцевальные направления</h2>
          <p className="text-xl text-gray-600">Найдите свой стиль в танце</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-200 rounded-t-lg flex items-center justify-center">
                <Icon name="Music" size={48} className="text-primary" />
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Расписание занятий</h2>
          <p className="text-xl text-gray-600">Выберите удобное время для тренировок</p>
        </div>

        <div className="space-y-6">
          {scheduleData.map((daySchedule, dayIndex) => (
            <Card key={dayIndex} className="animate-fade-in" style={{ animationDelay: `${dayIndex * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Icon name="Calendar" className="mr-2" size={24} />
                  {daySchedule.day}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Время</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Направление</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Преподаватель</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Уровень</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Места</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-700">Действие</th>
                      </tr>
                    </thead>
                    <tbody>
                      {daySchedule.classes.map((classItem, classIndex) => {
                        const isAvailable = classItem.booked < classItem.spots;
                        const availableSpots = classItem.spots - classItem.booked;
                        
                        return (
                          <tr key={classIndex} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <Icon name="Clock" className="mr-2 text-gray-400" size={16} />
                                <span className="font-medium">{classItem.time}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <Icon name="Music" className="mr-2 text-primary" size={16} />
                                <span className="font-medium">{classItem.name}</span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center">
                                <Icon name="User" className="mr-2 text-gray-400" size={16} />
                                {classItem.instructor}
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <Badge 
                                variant={
                                  classItem.level === 'Начальный' ? 'default' : 
                                  classItem.level === 'Средний' ? 'secondary' : 'destructive'
                                }
                              >
                                {classItem.level}
                              </Badge>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center space-x-2">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                                    style={{ width: `${(classItem.booked / classItem.spots) * 100}%` }}
                                  />
                                </div>
                                <span className="text-sm text-gray-600 min-w-[60px]">
                                  {availableSpots > 0 ? `${availableSpots} свободно` : 'Нет мест'}
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <Button 
                                size="sm" 
                                variant={isAvailable ? 'default' : 'outline'}
                                disabled={!isAvailable}
                                className="hover-scale"
                              >
                                {isAvailable ? 'Записаться' : 'Группа заполнена'}
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
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
                <Icon name="Music" className="text-primary" size={24} />
                <h3 className="text-xl font-bold">DanceStudio</h3>
              </div>
              <p className="text-gray-400">
                Профессиональная студия танцев с лучшими преподавателями
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Направления</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Балет</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Современные танцы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Хип-хоп</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Студия</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@dancestudio.ru</li>
                <li>г. Москва, ул. Танцевальная, д. 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DanceStudio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;