export function canPutCard(player, card) {
    if (player.me) {
        if (card.type === "Distance" || card.type === "Spéciale" || card.type === "Personnage") {
            return true
        } else if (card.type === "Bonus") {
            switch (player.state) {
                case "Cognard":
                    if (card.name === "Vulnera Sanentur") {
                        return true
                    }
                    return false
                    break;
                case "Expeliarmus":
                    if (card.name === "Protego") {
                        return true
                    }
                    return false
                    break;
                case "Diffinito":
                    if (card.name === "Reparo") {
                        return true
                    }
                    return false
                    break;
                case "Imobilis":
                    if (card.name === "Finite Incantatem") {
                        return true
                    }
                    return false
                    break;
                case "Impedimenta":
                    if (card.name === "Mobilicorpus") {
                        return true
                    }
                    return false
                    break;
                default:
                    return false
                    break;
            }
        }
    } else {
        if (card.type === "Malus") {
            switch (player.state) {
                case "Vulnera Sanentur":
                    if (card.name === "Cognard") {
                        return true
                    }
                    return false
                    break;
                case "Protego":
                    if (card.name === "Expeliarmus") {
                        return true
                    }
                    return false
                    break;
                case "Reparo":
                    if (card.name === "Diffinito") {
                        return true
                    }
                    return false
                    break;
                case "Finite Incantatem":
                    if (card.name === "Imobilis") {
                        return true
                    }
                    return false
                    break;
                case "Mobilicorpus":
                    if (card.name === "Impedimenta") {
                        return true
                    }
                    return false
                    break;
                case "":
                    return true
                    break;
                default:
                    return false
                    break;
            }
        }
        return false
    }
}