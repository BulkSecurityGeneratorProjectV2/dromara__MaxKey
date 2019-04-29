
package org.maxkey.authn.realm.radius;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import net.jradius.client.RadiusClient;

/**
 * Factory for creating RADIUS client instances.
 *
 */
public class RadiusServerBase {

    /** The port to do accounting on. */
    @Min(1)
    private int accountingPort =1813;

    /** The port to do authentication on. */
    @Min(1)
    private int authenticationPort = 1812;

    /** Socket timeout in seconds. */
    @Min(0)
    private int socketTimeout = 30;

    /** RADIUS server network address. */
    @NotNull
    private InetAddress inetAddress;

    /** The shared secret to send to the RADIUS server. */
    @NotNull
    private String sharedSecret;

    /**
     * Sets the RADIUS server accounting port.
     *
     * @param port Accounting port number.
     */
    public void setAccountingPort(final int port) {
        this.accountingPort = port;
    }

    /**
     * Sets the RADIUS server authentication port.
     *
     * @param port Authentication port number.
     */
    public void setAuthenticationPort(final int port) {
        this.authenticationPort = port;
    }

    /**
     * Sets the RADIUS server UDP socket timeout.
     *
     * @param timeout Timeout in seconds; 0 for no timeout.
     */
    public void setSocketTimeout(final int timeout) {
        this.socketTimeout = timeout;
    }

    /**
     * RADIUS server network address.
     *
     * @param address Network address as a string.
     */
    public void setInetAddress(final String address) {
        try {
            this.inetAddress = InetAddress.getByName(address);
        } catch (final UnknownHostException e) {
            throw new RuntimeException("Invalid address " + address);
        }
    }

    /**
     * RADIUS server authentication shared secret.
     *
     * @param secret Shared secret.
     */
    public void setSharedSecret(final String secret) {
        this.sharedSecret = secret;
    }

    /**
     * Creates a new RADIUS client instance using factory configuration settings.
     *
     * @return New radius client instance.
     * @throws IOException In case the transport method encounters an error.
     */
    public RadiusClient newInstance() throws IOException {
        return new RadiusClient(
                this.inetAddress, this.sharedSecret, this.authenticationPort, this.accountingPort, this.socketTimeout);
    }
}
