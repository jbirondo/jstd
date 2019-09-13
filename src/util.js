class Util {

    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }

    dist(pos1, pos2) {
        return Math.sqrt(
            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
    }

    norm(vec) {
        return Util.dist([0, 0], vec);
    }

    dir(vec) {
        const norm = Util.norm(vec);
        return Util.scale(vec, 1 / norm);
    }
}

module.exports = Util