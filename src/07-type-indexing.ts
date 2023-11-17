//* TYPE INDEXING

type HeroProperties = {
  isActive: boolean;
  address: {
    planet: string;
    city: string;
  };
};

const addressHero: HeroProperties['address'] = {
  planet: 'Earth',
  city: 'Lima',
};

const address1 = {
  planet: 'Earth',
  city: 'Lima',
};

//* TYPE FROM VALUE Y TYPEOF
//Note: Obtener el tipo a través de una constante
type Address = typeof address1; // El typeof es un operador de js para sacar el tipo, pero en ts realiza más cosas

const addressTwitch: Address = {
  planet: 'Jupiter',
  city: 'Twitch',
};

//* TYPE FROM FUNCTION RETURN
//Note: Obtener el tipo a través de una function
function createAddress() {
  return {
    planet: 'Tierra',
    city: 'Lima',
  };
}

// ReturnType es un Utility de ts
type Address2 = ReturnType<typeof createAddress>;
