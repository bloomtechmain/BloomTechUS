# DMARC Email Security Setup Guide

## Overview
DMARC (Domain-based Message Authentication, Reporting & Conformance) is an email authentication protocol that helps protect your domain from email spoofing and phishing attacks while improving email deliverability.

---

## 🚨 Current Status
According to the SEO audit, **BloomTechUSA.com does not have a DMARC record in place**.

---

## ✅ Benefits of DMARC

1. **Prevents Email Spoofing**
   - Stops attackers from sending emails that appear to come from your domain
   - Protects your brand reputation

2. **Improves Email Deliverability**
   - Legitimate emails are more likely to reach inboxes
   - Reduces spam folder placement

3. **Visibility & Reporting**
   - Receive reports on email authentication
   - Monitor who's sending emails on your behalf

4. **Compliance**
   - Required by some industries and partners
   - Best practice for business email security

---

## 📋 Prerequisites

Before implementing DMARC, you must have:

1. **SPF Record** (Already in place ✅)
   - Current SPF: `v=spf1 include:zohomail.com ~all`

2. **DKIM Record**
   - Check with your email provider (Zoho Mail)
   - Should be configured in Zoho admin panel

3. **DNS Access**
   - Access to your domain DNS settings
   - Ability to add TXT records

---

## 🛠️ Implementation Steps

### Step 1: Verify Current Email Authentication

#### Check SPF Record
```bash
dig txt bloomtechusa.com | grep spf
```
Expected: `v=spf1 include:zohomail.com ~all` ✅

#### Check DKIM Record
```bash
dig txt default._domainkey.bloomtechusa.com
```
If not configured, set up DKIM in Zoho Mail first.

### Step 2: Choose DMARC Policy

DMARC has three policy levels:

1. **none** (Monitoring Mode - Recommended for Start)
   - Monitors but doesn't block
   - Collect reports to understand email flow
   - Best for initial setup

2. **quarantine** (Medium Protection)
   - Suspicious emails go to spam
   - Use after analyzing reports

3. **reject** (Maximum Protection)
   - Reject unauthorized emails entirely
   - Use only after confidence in configuration

### Step 3: Create DMARC Record

#### Basic DMARC Record (Recommended to Start)
```
v=DMARC1; p=none; rua=mailto:dmarc@bloomtechusa.com; ruf=mailto:dmarc@bloomtechusa.com; fo=1
```

#### Breakdown:
- `v=DMARC1` - Version
- `p=none` - Policy (monitoring only)
- `rua=mailto:dmarc@bloomtechusa.com` - Aggregate reports email
- `ruf=mailto:dmarc@bloomtechusa.com` - Forensic reports email
- `fo=1` - Forensic reporting options

#### Advanced DMARC Record (After Testing)
```
v=DMARC1; p=quarantine; sp=quarantine; rua=mailto:dmarc@bloomtechusa.com; ruf=mailto:dmarc@bloomtechusa.com; pct=100; adkim=s; aspf=s; fo=1
```

Additional tags:
- `sp=quarantine` - Subdomain policy
- `pct=100` - Percentage of messages to apply policy (100%)
- `adkim=s` - DKIM alignment (strict)
- `aspf=s` - SPF alignment (strict)

### Step 4: Add DMARC Record to DNS

1. **Log in to your DNS provider** (Cloudflare, GoDaddy, etc.)

2. **Add a new TXT record:**
   - **Name/Host**: `_dmarc`
   - **Type**: TXT
   - **Value**: `v=DMARC1; p=none; rua=mailto:dmarc@bloomtechusa.com; ruf=mailto:dmarc@bloomtechusa.com; fo=1`
   - **TTL**: 3600 (or default)

3. **Save the record**

### Step 5: Verify DMARC Record

Wait 24-48 hours for DNS propagation, then verify:

```bash
dig txt _dmarc.bloomtechusa.com
```

Or use online tools:
- https://mxtoolbox.com/dmarc.aspx
- https://dmarcian.com/dmarc-inspector/

---

## 📧 Email Setup for Reports

### Create DMARC Mailbox

1. **In Zoho Mail Admin Panel:**
   - Create email: `dmarc@bloomtechusa.com`
   - Set up forwarding to IT team if needed

2. **Alternative - Use Third-Party Service:**
   - Dmarcian.com
   - Valimail
   - Postmark DMARC Digests (free)

### Understanding DMARC Reports

#### Aggregate Reports (RUA)
- Sent daily
- XML format
- Shows authentication results
- Identifies email sources

#### Forensic Reports (RUF)
- Sent immediately on failure
- Individual message details
- Help identify spoofing attempts

---

## 📊 Monitoring & Gradual Rollout

### Phase 1: Monitor (Week 1-4)
```
p=none
```
- Collect reports
- Identify all legitimate email sources
- Verify SPF/DKIM are working

### Phase 2: Quarantine (Week 5-8)
```
p=quarantine; pct=10
```
- Start with 10% of emails
- Gradually increase to 100%
- Monitor bounce rates

### Phase 3: Reject (Week 9+)
```
p=reject; pct=100
```
- Full protection enabled
- All unauthorized emails rejected
- Continuous monitoring

---

## 🔧 DNS Configuration Examples

### Cloudflare
1. Log in to Cloudflare Dashboard
2. Select bloomtechusa.com domain
3. Go to DNS > Records
4. Click "Add record"
5. Select "TXT" type
6. Name: `_dmarc`
7. Content: `v=DMARC1; p=none; rua=mailto:dmarc@bloomtechusa.com`
8. Save

### GoDaddy
1. Log in to GoDaddy
2. Go to My Products > DNS
3. Click "Add" under Records
4. Type: TXT
5. Name: `_dmarc`
6. Value: `v=DMARC1; p=none; rua=mailto:dmarc@bloomtechusa.com`
7. Save

### Generic DNS Provider
- Record Type: TXT
- Host: `_dmarc`
- Value: `v=DMARC1; p=none; rua=mailto:dmarc@bloomtechusa.com`
- TTL: 3600

---

## ⚠️ Common Issues & Troubleshooting

### Issue 1: No Reports Received
**Causes:**
- DMARC record not published correctly
- Email address typo in rua/ruf
- Reports being filtered to spam

**Solutions:**
- Verify DNS record with dig command
- Check spam folder
- Whitelist reporting domains

### Issue 2: Legitimate Emails Quarantined
**Causes:**
- SPF record incomplete
- DKIM not configured
- Forwarded emails

**Solutions:**
- Update SPF to include all sending services
- Configure DKIM for all sending sources
- Start with p=none and monitor

### Issue 3: DNS Propagation Delays
**Causes:**
- TTL too high
- DNS caching

**Solutions:**
- Wait 24-48 hours
- Use multiple DNS checkers
- Clear local DNS cache

---

## 📚 Additional Resources

### Testing Tools
- **MXToolbox**: https://mxtoolbox.com/dmarc.aspx
- **DMARC Analyzer**: https://www.dmarcanalyzer.com/
- **Google Admin Toolbox**: https://toolbox.googleapps.com/apps/checkmx/

### DMARC Report Analyzers
- **Postmark**: https://dmarc.postmarkapp.com/ (Free)
- **Dmarcian**: https://dmarcian.com/
- **Valimail**: https://www.valimail.com/

### Documentation
- **DMARC.org**: https://dmarc.org/
- **Zoho DMARC Guide**: https://www.zoho.com/mail/help/dmarc.html

---

## ✅ Implementation Checklist

- [ ] Verify SPF record is in place
- [ ] Configure DKIM in Zoho Mail
- [ ] Create dmarc@bloomtechusa.com email address
- [ ] Access DNS provider dashboard
- [ ] Add DMARC TXT record with p=none
- [ ] Verify record propagation (24-48 hours)
- [ ] Monitor reports for 2-4 weeks
- [ ] Adjust to p=quarantine gradually
- [ ] Eventually move to p=reject
- [ ] Set up automated report monitoring

---

## 🎯 Recommended DMARC Record for BloomTechUSA

### Initial Setup (Month 1)
```
v=DMARC1; p=none; rua=mailto:dmarc@bloomtechusa.com; ruf=mailto:dmarc@bloomtechusa.com; fo=1; ri=86400
```

### After Monitoring (Month 2-3)
```
v=DMARC1; p=quarantine; pct=25; rua=mailto:dmarc@bloomtechusa.com; ruf=mailto:dmarc@bloomtechusa.com; fo=1; adkim=r; aspf=r
```

### Production (Month 4+)
```
v=DMARC1; p=reject; sp=reject; rua=mailto:dmarc@bloomtechusa.com; ruf=mailto:dmarc@bloomtechusa.com; pct=100; adkim=s; aspf=s; fo=1
```

---

## 📞 Support

### Need Help?
- **Zoho Support**: For DKIM/SPF configuration
- **DNS Provider Support**: For record management
- **Email Security Consultant**: For advanced setup

### Contact BloomTech IT
- Email: info@bloomtechusa.com
- Phone: (737) 329-8158

---

**Last Updated**: April 23, 2026
**Status**: Awaiting Implementation
**Priority**: Medium (Improves deliverability and security)
