import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';



import Translate, { translate } from '@docusaurus/Translate';

const features = [

      {
        title: <a href='docs/purchase/purchases-intro'><Translate>{'Acquisti'}</Translate></a>,
        description: (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href='docs/purchase/purchase-requests/general-overview'><Translate>Richieste di acquisto</Translate></a></li> 
            <li><a href='docs/purchase/offer-request/settings'><Translate>Richieste di offerta</Translate></a></li> 
            <li><a href='docs/purchase/purchase-orders/general-overview'><Translate>Ordini fornitori</Translate></a></li> 
            <li><a href='docs/purchase/goods-reception/receipt-goods-form-settings-and-structure'><Translate>Ricevimento merci</Translate></a></li> 
            <li><a href='docs/purchase/purchase-delivery-note/general-overview'><Translate>DDT di acquisto</Translate></a></li> 
            <li><a href='docs/purchase/purchase-invoices/general-overview'><Translate>Fatture di acquisto</Translate></a></li> 
            <li><a href='docs/purchase/purchase-price-lists/general-overview'><Translate>Listini fornitori</Translate></a></li> 
            <li><a href='docs/purchase/price-control/definition'><Translate>Gestione prezzi</Translate></a></li> 
          </ul>
         ),    
        },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--3 margin-bottom--lg')}>
      <h4 className="description margin-bottom--md">{title}</h4>
      <div className="margin-bottom--md">
        <strong className="hr-line"></strong>
      </div>
      <div className='description'>{description}</div>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.title}`}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <a className="button button--primary bottoneCustom bi bi-arrow-up-right-circle-fill" href="docs/guide/intro/intro-erp"> Introduzione
            </a>

          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container padding-top--lg">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
