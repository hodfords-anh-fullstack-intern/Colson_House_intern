import React from 'react';

const sections = [
  {
    title: 'Bookings',
    content:
      'Bookings are made and a contract between You and Us comes into effect when We accept a reservation from You. We will accept a reservation when We have confirmed Your reservation and received the deposit payment of the first night\'s stay. You must be able to enter into a legally binding contract and be over 18yrs to make a Booking.\n\nBookings must be paid for using an acceptable and valid credit or debit card.',
  },
  {
    title: 'Prices',
    content:
      'All published rates include VAT where applicable (and local taxes) at the current rate. Rates are per room per night. If You have selected supplements they will be added to the total price of the Booking. Rates do not include other costs you may choose to incur during Your stay (unless otherwise stated). Rates quoted are correct only for the specific number of guests, nights and dates shown. Should You change the number of guests, dates or room nights, then the rates are subject to change.\n\nCheck out is at 11:00. Late check out may be available on request but may be subject to a supplement cost.',
  },
  {
    title: 'Conditions of Stay',
    content:
      'We have some standard rules that are designed to ensure that we comply with regulations relating to matters such as fire, health and safety and to enhance the comfort and wellbeing of our guests. If you would like to check our conditions of stay please contact us. We reserve the right to terminate Your Booking immediately without being liable for any refund or compensation where You engage in unacceptable behaviour that causes a disturbance or nuisance to other guests.',
  },
  {
    title: 'Liability',
    content:
      'Other than for death or personal injury caused by Our negligence or misrepresentation, Our total liability to You is limited to the price of the Booking and to the fullest extent permitted by law all warranties are excluded and in no circumstances will We be responsible for any indirect or special damages. We will not be liable for failure to perform to the extent that the failure is caused by any factor beyond Our reasonable control. You are responsible for any damage or loss caused to Us or our property by Your act, omission, default or neglect and You agree to indemnify Us and to pay Us on demand the amount reasonably required to make good or remedy any such damage or loss.',
  },
  {
    title: 'Smoking',
    content:
      'Smoking and or Vaping (e-cigarettes) is not permitted anywhere within Colson House or its grounds. For the care of future guests, if you smoke in your room a charge of £100.00 will be made to your credit/debit card, without prior notice, for the cost of deep cleaning the room and your booking will be terminated with no refund of accommodation costs or supplements.',
  },
  {
    title: 'Fire Instructions',
    content:
      'Please read the fire instructions in your room – The fire alarm is there for your safety.\n\nNo e-cigarettes, candles or incense please as these will set off the fire alarm.',
  },
  {
    title: 'Personal Belongings',
    content:
      'All property and personal belongings left on the premises is done so at the owner\'s risk. We accept no responsibility for stolen or damaged items.',
  },
  {
    title: 'Conditions of Use',
    content:
      'Due to the nature of the building we are not able to accommodate persons under 18 years old. Pets are not permitted.\n\nCheck in and check out times may be altered by prior arrangement if required.\n\nIt is Your responsibility to look after your key. If you lose your key there is a replacement charge of £25.',
  },
  {
    title: 'Accessibility Information',
    content:
      'There are no steps from the pavement to the front door. There is a double guest room on the ground floor and a double guest room at the rear of the ground floor with 2 steps down to this.',
    subsections: [
      {
        subtitle: 'Number of Floors',
        content: '3 floors, accessible via a staircase with hand rails on one side.',
      },
      {
        subtitle: 'Access Statement',
        content:
          'From the pavement there are no steps to the front door. On the ground floor we have one double guest room and all other guest rooms are accessible via the staircase with hand rails on one side. If you have any concerns over accessibility to our rooms, please do not hesitate to contact us to discuss your requirements.',
      },
      {
        subtitle: 'Support for the Mobility Impaired',
        content: 'Colson House does not have a lift.',
      },
    ],
  },
];

export default function TermsView() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <span className="section-subtitle">Legal</span>
          <h2 className="section-title">Terms and Conditions</h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '15px', lineHeight: '1.8' }}>
            These Booking Terms apply to "Colson House", our officers, employees and agents ('We'/'Us'/'Our') and
            the person or legal entity making the Booking or to whom We supply services in respect of the Booking
            ('You'/'Your'). These Booking Terms are governed by English law and apply to all Bookings except where
            We agree in writing other terms. By making a Booking You are deemed to accept these Booking Terms.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {sections.map((section, i) => (
            <div key={i}>
              <h3 style={{ fontSize: '22px', marginBottom: '12px', color: 'var(--dark)' }}>
                {section.title}
              </h3>

              {section.content && (
                <div style={{ color: 'var(--gray-600)', fontSize: '15px', lineHeight: '1.8' }}>
                  {section.content.split('\n\n').map((para, j) => (
                    <p key={j} style={{ marginBottom: '12px' }}>{para}</p>
                  ))}
                </div>
              )}

              {section.subsections && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '12px' }}>
                  {section.subsections.map((sub, j) => (
                    <div key={j}>
                      <h4 style={{ fontSize: '17px', marginBottom: '8px', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>
                        {sub.subtitle}
                      </h4>
                      <p style={{ color: 'var(--gray-600)', fontSize: '15px', lineHeight: '1.8' }}>{sub.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
