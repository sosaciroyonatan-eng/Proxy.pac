function FindProxyForURL(url, host) {
    // 1. VARIABLES DE RED LOCAL (Tus datos)
    var miRouter = "192.168.18.1";
    var miSubred = "192.168.18.0";
    var miMascara = "255.255.255.0";

    // 2. CONFIGURACIÓN DEL PROXY EXTERNO
    // IMPORTANTE: Aquí debes poner una IP de un servidor externo (Proxy/VPS)
    // No pongas 192.168.18.252 aquí, o el tráfico entrará en un bucle.
    var miProxy = "PROXY 47.56.110.204:8990";

    // 3. REGLAS DE EXCLUSIÓN (Tráfico Directo)
    // Si es el router, el nombre del host es simple (ej: "router") o es tu red local:
    if (isPlainHostName(host) || 
        host === miRouter || 
        isInNet(host, miSubred, miMascara) ||
        shExpMatch(host, "*.local")) {
        return "DIRECT";
    }

    // 4. REGLAS DE APERTURA
    // Intentar usar el proxy para todo lo demás, pero con salida directa si falla
    // Esto es ideal para hardware móvil porque no bloquea la navegación si el proxy cae
    return miProxy + "; DIRECT";
}