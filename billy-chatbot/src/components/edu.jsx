import React from 'react';

const Education = () => {
  return (
    <div className="p-8 min-h-screen bg-cover bg-center text-black">

      
      
      <div className="p-6 m-6"> {/* This div adds padding outside the white section container */}
    <section className="mb-6 bg-white bg-opacity-75 p-4 rounded-md">
      <div className="flex items-center">
        <div className="m-6 flex-1">
          <h2 className="text-3xl font-semibold mb-4">What is Cyberbullying</h2>
          <p className="text-xl text-justify">
            Cyberbullying is a form of bullying that takes place over digital devices such as smartphones, computers, and tablets. It involves using the internet, social media platforms, messaging apps, gaming communities, or other online spaces to harass, intimidate, or harm someone emotionally or psychologically.
          </p>
          <br />
          <p className="text-xl text-justify">
            Unlike traditional bullying, cyberbullying can happen anytime and anywhere, leaving victims feeling isolated and helpless. The anonymity of online platforms often emboldens perpetrators, making it harder for victims to seek help.
          </p>
        </div>
        <img
          className="w-1/3 h-auto ml-4 rounded-md object-contain"
          src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/9707d3e2-4a32-47df-8fd8-83924b98803d/317d1160-be99-4ce6-bad9-859b0d4174b9.png"
          alt="Cyberbullying"
        />
      </div>
    </section>
  </div>

      
      
      <div className="p-6 m-6"> {/* This div adds padding outside the white section container */}
   
      <section className="mb-6 bg-white bg-opacity-75 p-4 rounded-md ">
      <div className="m-6 flex items-center">
        <div className="flex-1">
          <h2 className="text-4xl font-semibold mb-4 ">Types of Cyberbullying</h2>
          </div>
</div>
</section>   

<section className="mb-6">
    {/* First row with two types */}
    <div className="flex gap-8 ">
      {/* Harassment */}
      <div className="bg-white bg-opacity-75 p-4 rounded-md w-1/2">
        <h3 className="m-6 text-3xl font-semibold mb-4">1. Harassment</h3>
        <p className="m-6 text-xl text-justify">
          Harassment involves sending hurtful, aggressive, or threatening messages to someone repeatedly. This can occur via text, email, or on social media platforms. The messages are often designed to intimidate or insult the victim. The repetition makes the victim feel trapped and constantly under attack. Harassment can be constant and relentless, sometimes leading the victim to feel hopeless or helpless.
        </p>
      </div>

      {/* Impersonation */}
      <div className="bg-white bg-opacity-75 p-4 rounded-md w-1/2">
        <h3 className="m-6 text-3xl font-semibold mb-4">2. Impersonation</h3>
        <p className="m-6 text-xl text-justify">
          Impersonation occurs when someone pretends to be another person online, often with the intent to harm their reputation, deceive others, or make them look bad. This can involve creating fake social media profiles or hacking into someone’s account to post false or hurtful content.
        </p>
      </div>
    </div>
  </section>

  <section className="mb-6">
    {/* Second row with two types */}
    <div className="flex gap-8">
      {/* Flaming */}
      <div className="bg-white bg-opacity-75 p-4 rounded-md w-1/2">
        <h3 className="m-6 text-3xl font-semibold mb-4">3. Flaming</h3>
        <p className="m-6 text-xl text-justify">
          Flaming refers to the act of posting offensive, rude, or abusive comments in public forums or social media to provoke others. It's usually done in an emotionally charged manner and can escalate into public arguments, making the victim feel humiliated or ostracized.
        </p>
      </div>

      {/* Outing and Doxing */}
      <div className="bg-white bg-opacity-75 p-4 rounded-md w-1/2">
        <h3 className="m-6 text-3xl font-semibold mb-4">4. Outing and Doxing</h3>
        <p className="m-6 text-xl text-justify">
          Outing involves sharing someone’s private information, such as personal secrets, photos, or videos, with the intention to embarrass, shame, or harm them. Doxing is a more malicious form of outing, where someone’s personal details like their home address, phone number, and even social security number are exposed online.
        </p>
      </div>
    </div>
  </section>

  <section className="mb-6">
    {/* Third row with two types */}
    <div className="flex gap-8">
      {/* Exclusion */}
      <div className="bg-white bg-opacity-75 p-4 rounded-md w-1/2">
        <h3 className="m-6 text-3xl font-semibold mb-4">5. Exclusion</h3>
        <p className="m-6 text-xl text-justify">
          Exclusion is a tactic where someone intentionally leaves a person out of group activities, conversations, or social circles in online spaces. It is often used to isolate the victim socially, making them feel abandoned and unimportant.
        </p>
      </div>

      {/* Cyberstalking */}
      <div className="bg-white bg-opacity-75 p-4 rounded-md w-1/2">
        <h3 className="m-6 text-3xl font-semibold mb-4">6. Cyberstalking</h3>
        <p className="m-6 text-xl text-justify">
          Cyberstalking is the persistent and obsessive monitoring of someone online. A cyberstalker may repeatedly visit the victim’s social media profiles, send threatening messages, or track their online activities to gain control or intimidate the victim. It often involves threatening behavior or explicit threats of harm.
        </p>
      </div>
    </div>
  </section>

  <section className="mb-6">
    {/* Fourth row with two types */}
    <div className="flex gap-8">
      {/* Trolling */}
      <div className="bg-white bg-opacity-75 p-4 rounded-md w-1/2">
        <h3 className="m-6 text-3xl font-semibold mb-4">7. Trolling</h3>
        <p className="m-6 text-xl text-justify">
          Trolling is the act of deliberately posting provocative, inflammatory, or off-topic comments online to stir up negative reactions, disrupt discussions, or cause confusion. Trolls often enjoy the reaction they provoke and may continue harassing the victim for their own amusement.
        </p>
      </div>

      {/* Catfishing */}
      <div className="bg-white bg-opacity-75 p-4 rounded-md w-1/2">
        <h3 className="m-6 text-3xl font-semibold mb-4">8. Catfishing</h3>
        <p className="m-6 text-xl text-justify">
          Catfishing is when someone creates a fake identity online to deceive others. This can be for emotional manipulation, financial gain, or just for amusement. The catfisher often builds a trusting relationship with the victim, only to betray that trust by revealing the truth later, causing emotional distress or harm.
        </p>
      </div>
    </div>
  </section>
        
  </div>

      

      
    </div>
  );
};

export default Education;
