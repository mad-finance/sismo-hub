import {
  hydraS1SimpleAttester,
  hydraS1SimpleBadges,
} from "@attestations-collections/playground/polygon/hydra-s1-simple";
import { Network } from "topics/attester";
import { Flow } from "topics/flow";

export const playgroundFactoryFlows: Flow[] = [
  {
    path: "wagame-lens-post-interaction",
    attester: hydraS1SimpleAttester.name,
    network: Network.Polygon,
    attesterType: "hydra-s1",
    badgesCollection: hydraS1SimpleBadges,
    badgesInternalCollectionsIds: [2597607],
    title: "",
    logoUrl: null,
    subtitle: "Mint Wagame Lens fam ZK Badge",
    ctaLabel: "",
    ctaUrl: "",
    congratulationTexts: [],
  },
  // {
  //   path: "proof-of-attendance",
  //   attester: hydraS1SimpleAttester.name,
  //   network: Network.Polygon,
  //   attesterType: "hydra-s1",
  //   badgesCollection: hydraS1SimpleBadges,
  //   badgesInternalCollectionsIds: [3000000],
  //   title: "POAP",
  //   logoUrl: null,
  //   subtitle: "Prove that you attended Ethereum events",
  //   ctaLabel: "See my badge",
  //   ctaUrl: "",
  //   congratulationTexts: [
  //     "You can now prove that you",
  //     "attended Ethereum events",
  //   ],
  // },
];
