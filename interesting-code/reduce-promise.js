websiteIds.reduce((previousPromise, id) => {
  return previousPromise
    .then(async (acc) => {
      const websitesStats = await stats.getForWebsitesCassandra([ id ], startDate, endDate, 'listing');

      const website = Object.entries(websitesStats).map(([ websiteId, metrics ]) => ({
        websiteId,
        ...(_.pick(metrics, ['Outbound... ', ' ...', 'linksPerWidget' ] )),
      }));
      return acc.concat(website); 
  });
}, Promise.resolve([]))