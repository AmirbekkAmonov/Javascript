

class Event {
    constructor(name, location, startDate, endDate) {
      this.name = name;
      this.location = location;
      this.startDate = startDate;
      this.endDate = endDate;
      this.participants = [];
    }
  }
  
  class Participant {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.registeredEvents = [];
    }
  }
  
  class Conference extends Event {
    constructor(name, location, startDate, endDate, topic, speakers) {
      super(name, location, startDate, endDate);
      this.topic = topic;
      this.speakers = speakers;
    }
  }
  
  class Workshop extends Event {
    constructor(name, location, startDate, endDate, materials) {
      super(name, location, startDate, endDate);
      this.materials = materials;
    }
  }
  
  class EventManager {
    constructor() {
      this.events = [];
    }
  
    addEvent(event) {
      this.events.push(event);
    }
  
    registerParticipant(eventId, participant) {
      const event = this.findEventById(eventId);
      if (event) {
        event.participants.push(participant);
        participant.registeredEvents.push(event);
      } else {
        console.log("Tadbir topilmadi.");
      }
    }
  
    findEventById(eventId) {
      return this.events.find(event => event.id === eventId);
    }
  
    listAllEvents() {
      this.events.forEach(event => {
        console.log(`Tadbir nomi: ${event.name}`);
        console.log(`Joylashuvi: ${event.location}`);
        console.log(`Boshlanish sanasi: ${event.startDate}`);
        console.log(`Tugash sanasi: ${event.endDate}`);
        console.log("Qatnashchilar:");
        event.participants.forEach(participant => {
          console.log(`- ${participant.name} (${participant.email})`);
        });
        console.log("--------------------------------------");
      });
    }
  }
  
  // Tadbirlarni yaratish
  const conference1 = new Conference("Konferentsiya 1", "Toshkent", "2024-05-01", "2024-05-03", "Ilmiy mavzu 1", ["Speaker 1", "Speaker 2"]);
  const workshop1 = new Workshop("Mashg'ulot 1", "Toshkent", "2024-06-01", "2024-06-02", "Materiallar 1");
  
  // Tadbir boshqaruvi tizimini yaratish
  const eventManager = new EventManager();
  
  // Tadbirlarni tadbir boshqaruvi tizimiga qo'shish
  eventManager.addEvent(conference1);
  eventManager.addEvent(workshop1);
  
  // Qatnashchilarni yaratish
  const participant1 = new Participant(1, "Ism 1", "ism1@example.com");
  const participant2 = new Participant(2, "Ism 2", "ism2@example.com");
  
  // Qatnashchilarni tadbirlarga ro'yxatdan o'tkazish
  eventManager.registerParticipant(conference1.id, participant1);
  eventManager.registerParticipant(conference1.id, participant2);
  eventManager.registerParticipant(workshop1.id, participant2);
  
  // Barcha tadbirlarni chiqarish
  eventManager.listAllEvents();