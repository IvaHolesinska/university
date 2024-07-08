import { computed } from "vue";

export function useDomainData(store, isSwitchOn) {
  const domainDetailData = computed(() => store.getters.getDomainDetailData);

  const authInfo = computed(() => {
    const expire = domainDetailData.value.expires_at || "";
    return [
      {
        label: "AuthInfo",
        type: "button",
        value: { text: "Show", density: "comfortable", color: "primary" },
      },
      {
        label: "Expires at",
        value: expire || "",
      },
    ];
  });

  const eventsData = computed(() => {
    const events = domainDetailData.value.events || {};
    return [
      { label: "Create date", value: events.registered?.timestamp || "" },
      {
        label: "Registrar (create)",
        value: events.registered?.registrar_handle || "",
      },
      { label: "Update date", value: events.updated?.timestamp || "" },
      {
        label: "Registrar (update)",
        value: events.updated?.registrar_handle || "",
      },
      { label: "Transfer date", value: events.transferred?.timestamp || "" },
      {
        label: "Registrar (transfer)",
        value: events.transferred?.registrar_handle || "",
      },
      { label: "Delete date", value: events.deleted?.timestamp || "" },
    ];
  });

  const flagsData = computed(() => {
    const flags = domainDetailData.value.state_flags?.flags || [];
    return flags
      .filter((flag) => isSwitchOn.value || flag.active)
      .map((flag) => ({ value: flag.description }));
  });

  const ownerInfoData = computed(() => {
    const owner = domainDetailData.value.owner || {};
    return [
      { label: "Handle", value: owner.handle || "" },
      { label: "Organization", value: owner.organization || "" },
      { label: "Name", value: owner.name || "" },
    ];
  });

  const nssetData = computed(() => {
    const nsset = domainDetailData.value.nsset || {};
    return [
      { label: "Handle", value: nsset.handle || "" },
      { label: "Registrar", value: nsset.registrar || "" },
      { label: "DNS Servers", value: nsset.dns || [] },
    ];
  });

  const keysetData = computed(() => {
    const keyset = domainDetailData.value.keyset || {};
    return [
      { label: "Handle", value: keyset.handle || "" },
      { label: "Registrar", value: keyset.registrar || "" },
      { label: "DNS", value: keyset.dns_keys || "" },
    ];
  });

  return {
    authInfo,
    eventsData,
    flagsData,
    ownerInfoData,
    nssetData,
    keysetData,
    domainDetailData,
  };
}
